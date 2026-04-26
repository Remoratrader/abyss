import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { VISUAL_CONFIG, PHYSICS_CONFIG } from './constants.js';
import { SerafimLogger } from './logger.js';
import { SerafimWatchdog } from './watchdog.js';
import { SerafimTerminal } from './sterm.js';
import { SerafimOnboarding } from './onboarding.js';
import { translations, creatureNarratives } from './narratives.js';
import { makeUserNode, makeServerRack } from './assets.js';

// ─── Visual Constants ─────────────────────────────────────────────────────────
const { 
  NV_FILTER, 
  NV_AMBIENT_BOOST, 
  NV_EMISSIVE_BOOST, 
  AMBIENT_NORMAL, 
  AMBIENT_DARK, 
  ROV_POINT_NORMAL, 
  ROV_POINT_DARK, 
  ROV_RANGE_NORMAL, 
  ROV_RANGE_DARK, 
  ROV_VIGNETTE_GRADIENT,
  NV_VIGNETTE_GRADIENT
} = VISUAL_CONFIG;
// ─────────────────────────────────────────────────────────────────────────────

// ─── Scene Setup ───────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0f);
scene.fog = new THREE.FogExp2(0x060d18, 0.017);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(14, 5, 18);

// --- Serafim Systems ---
const watchdog = new SerafimWatchdog(null, scene);
const terminal = new SerafimTerminal('sterm-container');
const onboarding = new SerafimOnboarding();

watchdog.runDiagnostics();
setTimeout(() => onboarding.start(), 3000);

// Tracking for population metrics
const populationStats = {
  total: 0,
  users: 0,
  infra: 0
};

function initPopulation() {
  SerafimLogger.info('POPULATION: Initializing digital entities...');
  
  // Layer 0: Surface (85%) - High density, civilians and bots
  for(let i = 0; i < 60; i++) {
    const type = Math.random() > 0.8 ? 'bot' : 'user';
    const node = makeUserNode(type, type === 'bot' ? 'Crawler_Bot' : 'Civilian_User');
    node.position.set(Math.random() * 40 - 20, Math.random() * -10, Math.random() * 40 - 20);
    scene.add(node);
    populationStats.total++;
    populationStats.users++;
  }

  // Layer 1: Midnight (12%) - Programmers and admins
  for(let i = 0; i < 15; i++) {
    const node = makeUserNode('user', 'Sys_Admin');
    node.position.set(Math.random() * 30 - 15, -15 - Math.random() * 10, Math.random() * 30 - 15);
    scene.add(node);
    populationStats.total++;
    populationStats.users++;
  }

  // Layer 2: Abyss (2.8%) - Hackers and APTs
  for(let i = 0; i < 5; i++) {
    const node = makeUserNode('hacker', 'Agente_APT');
    node.position.set(Math.random() * 20 - 10, -30 - Math.random() * 15, Math.random() * 20 - 10);
    scene.add(node);
    populationStats.total++;
    populationStats.users++;
  }

  // Layer 3: Infrastructure
  for(let i = 0; i < 8; i++) {
    const rack = makeServerRack();
    rack.position.set(Math.random() * 25 - 12.5, -50 - Math.random() * 10, Math.random() * 25 - 12.5);
    scene.add(rack);
    populationStats.total++;
    populationStats.infra++;
  }

  updateOverlayMetrics();
}

function updateOverlayMetrics() {
  const pEl = document.getElementById('ui-population');
  const uEl = document.getElementById('ui-users');
  const iEl = document.getElementById('ui-infra');
  if(pEl) pEl.textContent = `${populationStats.total} Entidades`;
  if(uEl) uEl.textContent = populationStats.users;
  if(iEl) iEl.textContent = populationStats.infra;
}

initPopulation();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.shadowMap.enabled = false;

const root = document.getElementById('root') ?? document.body;
root.appendChild(renderer.domElement);

// ─── Post-Processing (Bloom + Color Grading + Vignette) ──────────────────────
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Subtle bloom — makes lights, emissives and bioluminescence glow softly
// Half-resolution bloom is visually identical (bloom is inherently blurry) but 75% fewer fragments
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2)),
  0.04,  // strength — subtle glow
  0.4,   // radius — how far the bloom spreads
  0.5    // threshold — only bright areas bloom
);
composer.addPass(bloomPass);

// Color grading + vignette as a single shader pass
const colorGradeVignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    tintColor: { value: new THREE.Vector3(0.85, 0.92, 1.0) },  // cool blue-teal tint
    tintStrength: { value: 0.12 },
    vignetteOffset: { value: 0.9 },
    vignetteDarkness: { value: 1.15 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec3 tintColor;
    uniform float tintStrength;
    uniform float vignetteOffset;
    uniform float vignetteDarkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      // Color grading — mix toward blue-teal
      vec3 graded = mix(texel.rgb, texel.rgb * tintColor, tintStrength);
      // Vignette — darken edges
      vec2 uv = (vUv - vec2(0.5)) * vec2(vignetteOffset);
      float vig = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
      vig = pow(vig, vignetteDarkness);
      graded *= vig;
      gl_FragColor = vec4(graded, texel.a);
    }
  `
};
const colorGradePass = new ShaderPass(colorGradeVignetteShader);
composer.addPass(colorGradePass);

const outputPass = new OutputPass();
composer.addPass(outputPass);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 8;
controls.maxDistance = 45;
controls.target.set(0, -5, 0);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;  // very slow gentle orbit

// Adjust exposure based on camera distance so zooming out doesn't darken the scene
controls.addEventListener('change', () => {
  const dist = camera.position.distanceTo(controls.target);
  // Linearly ramp exposure from 1.18 (close) up to 1.65 (fully zoomed out at maxDistance=45)
  const t = Math.max(0, Math.min(1, (dist - controls.minDistance) / (controls.maxDistance - controls.minDistance)));
  renderer.toneMappingExposure = 1.18 + t * 0.47;
});

// ─── Lights ─────────────────────────────────────────────────────────────────
// Hemisphere light — sky (warm surface) vs ground (deep cold blue) gradient fill
const hemiLight = new THREE.HemisphereLight(0x8fcfff, 0x000d26, 0.62);
hemiLight.name = 'hemiLight';
scene.add(hemiLight);

// Ambient — very low flat fill so shadows stay rich
const ambientLight = new THREE.AmbientLight(0x1a3a6e, 0.62);
ambientLight.name = 'ambientLight';
scene.add(ambientLight);

// Key sun — slightly warm, high-angle, casts crisp shadows
const sunLight = new THREE.DirectionalLight(0xfff4e0, 4.8);
sunLight.name = 'sunLight';
sunLight.position.set(12, 28, 8);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(1024, 1024);
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 80;
sunLight.shadow.camera.left = -20;
sunLight.shadow.camera.right = 20;
sunLight.shadow.camera.top = 20;
sunLight.shadow.camera.bottom = -20;
sunLight.shadow.bias = -0.001;
sunLight.shadow.normalBias = 0.02;
scene.add(sunLight);

// Fill light — cool deep-blue from opposite side, very subtle
const fillLight = new THREE.DirectionalLight(0x2a6ab8, 0.75);
fillLight.name = 'fillLight';
fillLight.position.set(-8, 4, -12);
scene.add(fillLight);

// Rim / back light — icy teal from below-rear to separate zones from background
const rimLight = new THREE.DirectionalLight(0x00c8ff, 0.52);
rimLight.name = 'rimLight';
rimLight.position.set(-10, -14, -8);
scene.add(rimLight);

// ─── Zone Definitions ────────────────────────────────────────────────────────
const CUBE_W = 12;
const CUBE_D = 12;
const ZONE_HEIGHTS = [6, 5, 5, 5]; // sunlight, twilight, midnight, abyss
const TOTAL_H = ZONE_HEIGHTS.reduce((a, b) => a + b, 0);

const zones = [
  {
    id: 0, name: 'Internet Backbone', depth: 'Surface Web',
    color: 0x1f8fc8, emissive: 0x126fb0,
    lightColor: 0x7fe6ff,
    y: 0,
    title: 'Internet Backbone (Surface Layer)',
    desc: 'The surface layer where most visible traffic flows. Public APIs, indexed databases and consumer-facing infrastructure. Traffic is fully exposed and monitored by major corporate nodes.',
    creatures: ['HTTP/S Traffic', 'Public APIs', 'CDN Edges', 'Corporate Firewalls']
  },
  {
    id: 1, name: 'Encrypted Grid', depth: 'Deep Web',
    color: 0x21427d, emissive: 0x13295a,
    lightColor: 0x5a7dff,
    y: -6,
    title: 'Encrypted Grid (Deep Web)',
    desc: 'Password-protected silos and internal corporate networks. Service daemons monitor all incoming requests. Unauthorized probes are silently logged and traced.',
    creatures: ['Service Daemons', 'Encrypted Packets', 'Auth Gateways', 'VPN Tunnels']
  },
  {
    id: 2, name: 'Darknet Routing', depth: 'Onion Layer',
    color: 0x171a52, emissive: 0x0a0d2e,
    lightColor: 0x3f49c9,
    y: -11,
    title: 'Darknet Routing (Onion Layer)',
    desc: 'Anonymous peer-to-peer routing where traffic bounces across encrypted relays. Identity is obfuscated through layered cryptography. Intrusion detection systems scan for anomalous behavioral signatures.',
    creatures: ['Onion Routers', 'P2P Nodes', 'Scrapers', 'Crypto Mixers']
  },
  {
    id: 3, name: 'Quantum Abyss', depth: 'Zero-Day Repository',
    color: 0x050816, emissive: 0x02040b,
    lightColor: 0x16245a,
    y: -16,
    title: 'Quantum Abyss (Zero-Day Repository)',
    desc: 'Uncharted network depths housing zero-day exploits, APTs and experimental quantum decryption algorithms. Rogue AI fragments operate autonomously. No signal returns from the deepest nodes.',
    creatures: ['APT Entities', 'Polymorphic Code', 'Quantum Keys', 'Rogue AI Fragments']
  }
];

// Cumulative Y positions
let cumY = 0;
zones.forEach((z, i) => {
  z.y = -cumY - ZONE_HEIGHTS[i] / 2;
  z.height = ZONE_HEIGHTS[i];
  cumY += ZONE_HEIGHTS[i];
});

// ─── 3D Background Title — "OCEAN EXPLORER" behind the diorama ──────────────
let _cachedTitleGroup = null; // cached reference — avoids scene.getObjectByName every frame
{
  const TITLE_W = 4096;
  const TITLE_H = 1024;
  const DEPTH_LAYERS = 1;       // number of shadow extrusion layers
  const LAYER_OFFSET = 0.35;    // world-space Z spacing between layers

  // Helper: draw both lines onto a canvas with given style
  function drawTitleText(ctx, w, h, fillStyle, shadowOpts) {
    ctx.clearRect(0, 0, w, h);
    if (shadowOpts) {
      ctx.shadowColor   = shadowOpts.color || 'rgba(0,0,0,0.6)';
      ctx.shadowBlur    = shadowOpts.blur  || 14;
      ctx.shadowOffsetX = shadowOpts.ox    || 0;
      ctx.shadowOffsetY = shadowOpts.oy    || 0;
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur  = 0;
    }
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    // "OCEAN" — massive top line
    ctx.font      = '900 480px Inter, sans-serif';
    ctx.fillStyle = fillStyle;
    ctx.fillText('INTERNET', w / 2, h * 0.34);
    // "EXPLORER" — large bottom line
    ctx.font      = '900 320px Inter, sans-serif';
    ctx.fillText('DEEP DIVING', w / 2, h * 0.74);
  }

  // ── Front (main) layer — bright white with a soft outer glow ──
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = TITLE_W; frontCanvas.height = TITLE_H;
  const frontCtx = frontCanvas.getContext('2d');
 drawTitleText(frontCtx, TITLE_W, TITLE_H, 'rgba(210, 225, 235, 0.82)', {
  color: 'rgba(80,130,200,0.18)', blur: 0, ox: 0, oy: 0
});
  const frontTex = new THREE.CanvasTexture(frontCanvas);
  frontTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const planeW = 52;
  const planeH = 13;

  const frontMat = new THREE.MeshBasicMaterial({
    map: frontTex, transparent: true, opacity: 1.0,
    depthWrite: false, side: THREE.DoubleSide,
  });
  const frontPlane = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeH), frontMat);
  frontPlane.name = 'oceanExplorerTitle3D';

  // ── Shadow / extrusion layers — dark blue-black, stacked behind the front ──
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = TITLE_W; shadowCanvas.height = TITLE_H;
  const shadowCtx = shadowCanvas.getContext('2d');
  drawTitleText(shadowCtx, TITLE_W, TITLE_H, 'rgba(4,12,36,0.85)', null);
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  shadowTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const titleGroup = new THREE.Group();
  titleGroup.name = 'oceanExplorerTitleGroup';

  // Add shadow layers back-to-front so the front renders last
  for (let i = DEPTH_LAYERS; i >= 1; i--) {
    const layerMat = new THREE.MeshBasicMaterial({
      map: shadowTex, transparent: true,
      opacity: 0.55 - i * 0.06,   // fades as it recedes
      depthWrite: false, side: THREE.DoubleSide,
    });
    const layerMesh = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeH), layerMat);
    layerMesh.name = 'titleShadowLayer_' + i;
    layerMesh.position.z = -i * LAYER_OFFSET;
    titleGroup.add(layerMesh);
  }

  // Front layer on top
  titleGroup.add(frontPlane);

  // Position the whole group: higher up and behind the diorama
  titleGroup.position.set(0, -TOTAL_H / 2 + 13, -CUBE_D / 2 - 4);
  scene.add(titleGroup);
  _cachedTitleGroup = titleGroup;
}

// ─── Ocean Box ───────────────────────────────────────────────────────────────
const oceanGroup = new THREE.Group();
oceanGroup.name = 'oceanGroup';
scene.add(oceanGroup);

const zoneBoxes = [];
zones.forEach((z) => {
  // Extend each box by a small overlap so adjacent zone faces never sit on
  // exactly the same plane — eliminates z-fighting at zone boundaries.
  const OVERLAP = 0.04;
  const geo = new THREE.BoxGeometry(CUBE_W, z.height + OVERLAP, CUBE_D);
  const mat = new THREE.MeshStandardMaterial({
    color: z.color,
    transparent: true,
    opacity: 0.90,
    side: THREE.BackSide,
    roughness: 0.55,
    metalness: 0.02,
    emissive: z.emissive,
    emissiveIntensity: 0.5,
    polygonOffset: true,
    polygonOffsetFactor: 2,
    polygonOffsetUnits: 2,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'zonebox_' + z.id;
  mesh.position.set(0, z.y, 0);
  mesh.userData.zoneId = z.id;
  mesh.userData.baseColor = z.color;
  mesh.userData.baseEmissive = z.emissive;
  oceanGroup.add(mesh);
  zoneBoxes.push(mesh);

  // Frosted inner layer — a FrontSide pass that adds a soft milky haze
  // const frostMat = new THREE.MeshStandardMaterial({
   //  color: new THREE.Color(z.color).lerp(new THREE.Color(0xffffff), 0.45),
    // transparent: true,
   //  opacity: 0.12,
   //  side: THREE.FrontSide,
    // roughness: 0.95,
  //   metalness: 0.0,
   //  emissive: z.emissive,
   //  emissiveIntensity: 0.15,
   //  depthWrite: false,
   //  polygonOffset: true,
  //   polygonOffsetFactor: 1,
   //  polygonOffsetUnits: 1,
   //});
   // const frostGeo = new THREE.BoxGeometry(CUBE_W - 0.01, z.height + OVERLAP - 0.01, CUBE_D - 0.01);
  // const frostMesh = new THREE.Mesh(frostGeo, frostMat);
  // frostMesh.name = 'zonefrost_' + z.id;
  // frostMesh.position.set(0, z.y, 0);
   // oceanGroup.add(frostMesh);

  // Wireframe edges — for zone 0 (sunlight) omit the top 4 edges so the
  // top of the water block looks open/seamless with the wave surface above it.
  let edgeGeo;
  if (z.id === 0) {
    const hw = CUBE_W / 2, hh = z.height / 2, hd = CUBE_D / 2;
    // Define only the bottom 4 edges + 4 vertical pillars (skip top 4)
    const verts = new Float32Array([
      // bottom edges (y = -hh)
      -hw, -hh, -hd,   hw, -hh, -hd,
       hw, -hh, -hd,   hw, -hh,  hd,
       hw, -hh,  hd,  -hw, -hh,  hd,
      -hw, -hh,  hd,  -hw, -hh, -hd,
      // vertical pillars
      -hw, -hh, -hd,  -hw,  hh, -hd,
       hw, -hh, -hd,   hw,  hh, -hd,
       hw, -hh,  hd,   hw,  hh,  hd,
      -hw, -hh,  hd,  -hw,  hh,  hd,
    ]);
    edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  } else {
    edgeGeo = new THREE.EdgesGeometry(geo);
  }
  const lineMat = new THREE.LineBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.25 });
  const wireframe = new THREE.LineSegments(edgeGeo, lineMat);
  wireframe.name = 'zoneedge_' + z.id;
  wireframe.position.copy(mesh.position);
  oceanGroup.add(wireframe);
});

// Glass side panels removed — all had 0.0 opacity so were invisible but still rendered

// Zone front face transparent panel for picking
const zonePickMeshes = [];
zones.forEach((z) => {
  const geo = new THREE.PlaneGeometry(CUBE_W, z.height);
  const mat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'zonepick_' + z.id;
  mesh.position.set(0, z.y, CUBE_D / 2 + 0.01);
  mesh.userData.zoneId = z.id;
  scene.add(mesh);
  zonePickMeshes.push(mesh);
});

// ─── Zone Labels (3D) ────────────────────────────────────────────────────────
zones.forEach((z) => {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 512, 128);
  ctx.font = 'bold 38px Inter, sans-serif';
  ctx.fillStyle = 'rgba(160,220,255,0.85)';
  ctx.textAlign = 'left';
  ctx.fillText(z.name, 20, 55);
  ctx.font = '26px Inter, sans-serif';
  ctx.fillStyle = 'rgba(100,180,255,0.65)';
  ctx.fillText(z.depth, 20, 95);
  const tex = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.name = 'label_' + z.id;
  sprite.scale.set(6, 1.5, 1);
  sprite.position.set(-CUBE_W / 2 + 3, z.y + z.height / 2 - 0.5, CUBE_D / 2 + 0.3);
  scene.add(sprite);
});

// ─── Water Surface ────────────────────────────────────────────────────────────
const WAVE_SEG = 32;
const waveGeo = new THREE.PlaneGeometry(CUBE_W, CUBE_D, WAVE_SEG, WAVE_SEG);
waveGeo.rotateX(-Math.PI / 2);
const wavePos = waveGeo.attributes.position;
const waveData = [];
for (let i = 0; i < wavePos.count; i++) {
  waveData.push({
    ox: wavePos.getX(i),
    oz: wavePos.getZ(i),
    phase: Math.random() * Math.PI * 2
  });
}
const waveMat = new THREE.MeshStandardMaterial({
  color: 0x0088cc,
  transparent: true,
  opacity: 0.78,
  roughness: 0.05,
  metalness: 0.6,
  emissive: 0x003366,
  emissiveIntensity: 0.4
});
const waveMesh = new THREE.Mesh(waveGeo, waveMat);
waveMesh.name = 'waveMesh';
waveMesh.position.set(0, 0, 0);
waveMesh.receiveShadow = true;
scene.add(waveMesh);

// ─── Particle Bubbles / Marine Snow ──────────────────────────────────────────
const PARTICLE_COUNT = 300;
const particleGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(PARTICLE_COUNT * 3);
const pVel = new Float32Array(PARTICLE_COUNT);
const pDepth = new Float32Array(PARTICLE_COUNT);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  pPos[i * 3] = (Math.random() - 0.5) * CUBE_W;
  pPos[i * 3 + 1] = Math.random() * -TOTAL_H;
  pPos[i * 3 + 2] = (Math.random() - 0.5) * CUBE_D;
  pVel[i] = 0.005 + Math.random() * 0.015;
  pDepth[i] = Math.random();
}
particleGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const particleMat = new THREE.PointsMaterial({
  color: 0x88ccff, size: 0.06, transparent: true, opacity: 0.55, sizeAttenuation: true
});
const particles = new THREE.Points(particleGeo, particleMat);
particles.name = 'particles';
scene.add(particles);

// ─── Fish / Creature Factory ──────────────────────────────────────────────────
function makeFish(color, size, eyeColor = 0xffffff) {
  const g = new THREE.Group();
  g.userData.isFish = true;

  // Derive a complementary fin colour: if using default teal-ish, go warm orange; else darken
  // Teal/ocean fish get warm orange fins; dark deep-sea fish keep a muted variant
  const hsl = {}; new THREE.Color(color).getHSL(hsl);
  const isTealHue = hsl.h > 0.38 && hsl.h < 0.62;
  const finColor = (isTealHue && hsl.s > 0.25) ? 0xe06812 : new THREE.Color(color).multiplyScalar(0.55).getHex();
  const bellyColor = new THREE.Color(color).lerp(new THREE.Color(0x000000), 0.45).getHex();

  const bodyMat   = new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.55, metalness: 0.05 });
  const bellyMat  = new THREE.MeshStandardMaterial({ color: bellyColor, flatShading: true, roughness: 0.6, metalness: 0.0 });
  const finMat    = new THREE.MeshStandardMaterial({ color: finColor, flatShading: true, roughness: 0.5, metalness: 0.0, side: THREE.DoubleSide });
  const eyeMat    = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1 });

  // ── Body: low-poly elongated octahedron built from BufferGeometry ──
  // 9 vertices: nose, 4 mid-ring, 4 rear-ring, tail-root
  const S = size;
  const verts = new Float32Array([
    // 0: nose
     S * 1.6,  0,       0,
    // 1-4: mid-ring (widest point, slightly forward of centre)
     S * 0.2,  S * 0.55, S * 0.38,
     S * 0.2, -S * 0.42, S * 0.28,
     S * 0.2, -S * 0.42,-S * 0.28,
     S * 0.2,  S * 0.55,-S * 0.38,
    // 5-8: rear-ring
    -S * 0.9,  S * 0.28, S * 0.18,
    -S * 0.9, -S * 0.28, S * 0.18,
    -S * 0.9, -S * 0.28,-S * 0.18,
    -S * 0.9,  S * 0.28,-S * 0.18,
    // 9: tail-root
    -S * 1.55, 0,        0,
  ]);
  // Upper faces (body colour), lower faces (belly colour)
  const upperIdx = [
    0,1,4,  0,4,3,  // nose upper (approx)
    1,5,8,  1,8,4,  // mid upper
    5,9,8,          // rear upper
  ];
  const lowerIdx = [
    0,2,1,  0,3,2,  // nose lower
    2,6,5,  2,5,1,  // mid lower — body side
    6,9,5,          // rear lower
    0,4,8,  0,8,3,  // nose top-sides → treated as body
    3,8,7,  3,7,2,  // side
    7,9,6,  8,9,7,  // rear sides
    2,3,7,          // belly
  ];

  function buildPart(indices, mat) {
    const pos = [];
    indices.forEach(i => { pos.push(verts[i*3], verts[i*3+1], verts[i*3+2]); });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, mat);
  }

  const upperBody = buildPart(upperIdx, bodyMat);
  const lowerBody = buildPart(lowerIdx, bellyMat);
  g.add(upperBody);
  g.add(lowerBody);

  // ── Dorsal fin: tall triangle ──
  {
    const pos = new Float32Array([
       S * 0.35, S * 0.55, 0,
      -S * 0.3,  S * 0.55, 0,
       S * 0.05, S * 1.15, 0,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, finMat));
  }

  // ── Pectoral fin: swept triangle on each side ──
  [-1, 1].forEach(side => {
    const pos = new Float32Array([
       S * 0.5,  -S * 0.05, side * S * 0.38,
       S * 0.0,  -S * 0.2,  side * S * 0.38,
       S * 0.15, -S * 0.15, side * S * 0.82,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, finMat));
  });

  // ── Forked tail: two swept triangle lobes ──
  [-1, 1].forEach(side => {
    const pos = new Float32Array([
      -S * 1.55,  0,            0,
      -S * 1.55,  side * S * 0.18, 0,
      -S * 2.25,  side * S * 0.72, 0,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, finMat));
  });

  // ── Eye ──
  const eye = new THREE.Mesh(new THREE.SphereGeometry(S * 0.12, 5, 5), eyeMat);
  eye.position.set(S * 1.1, S * 0.18, S * 0.36);
  g.add(eye);

  return g;
}

function makeDolphin(size) {
  const g = new THREE.Group();
  g.userData.isFish = true;

  const S = size;
  const bodyMat  = new THREE.MeshStandardMaterial({ color: 0x3f9ab5, flatShading: true, roughness: 0.4, metalness: 0.0 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0xc8e8f5, flatShading: true, roughness: 0.45, metalness: 0.0 });
  const darkMat  = new THREE.MeshStandardMaterial({ color: 0x1e5c72, flatShading: true, roughness: 0.55, metalness: 0.0, side: THREE.DoubleSide });
  const eyeMat   = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.1 });

  function buildPart(vArr, mat) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vArr), 3));
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, mat);
  }

  // ── Body: 12-vertex low-poly torpedo ──
  // Vertices: 0=snout tip, 1-4=melon ring, 5-8=mid ring (widest), 9-12=peduncle ring, 13=fluke root
  const v = [
    /* 0 snout */      S*2.1,   0,        0,
    /* 1 melon top */  S*1.4,   S*0.38,   0,
    /* 2 melon side */ S*1.35,  S*0.1,    S*0.32,
    /* 3 melon bot */  S*1.38, -S*0.28,   0,
    /* 4 melon side */ S*1.35,  S*0.1,   -S*0.32,
    /* 5 mid top */    S*0.1,   S*0.52,   0,
    /* 6 mid side */   S*0.05,  S*0.12,   S*0.44,
    /* 7 mid bot */    S*0.08, -S*0.38,   0,
    /* 8 mid side */   S*0.05,  S*0.12,  -S*0.44,
    /* 9 ped top */   -S*1.1,   S*0.22,   0,
    /*10 ped side */  -S*1.12,  S*0.04,   S*0.18,
    /*11 ped bot */   -S*1.08, -S*0.16,   0,
    /*12 ped side */  -S*1.12,  S*0.04,  -S*0.18,
    /*13 fluke root*/ -S*1.55,  0,        0,
  ];

  // Upper body (blue-grey)
  const upperIdx = [
    // snout → melon top
    0,1,2,  0,4,1,
    // melon → mid top
    1,5,6,  1,6,2,  4,8,5,  4,1,5,
    // mid → peduncle top
    5,9,10, 5,10,6, 8,12,9, 8,9,5,
    // peduncle → fluke top
    9,13,10, 12,13,9,
    // sides
    2,6,7,  2,7,3,  4,3,7,  4,7,8,
    6,10,11,6,11,7, 8,7,11, 8,11,12,
    10,13,11,12,11,13,
  ];
  // Belly (pale)
  const bellyIdx = [
    0,3,2,  0,4,3,
    3,7,6,  3,6,2,  7,11,10,7,10,6,
    11,13,10, 7,3,4, 7,4,8, 11,7,8, 11,8,12, 13,11,12,
  ];

  g.add(buildPart(upperIdx.map(i=>[v[i*3],v[i*3+1],v[i*3+2]]).flat(), bodyMat));
  g.add(buildPart(bellyIdx.map(i=>[v[i*3],v[i*3+1],v[i*3+2]]).flat(), bellyMat));

  // ── Rostrum (beak): flat elongated triangle prism ──
  {
    const pts = new Float32Array([
      S*2.1,  0,        0,
      S*1.9,  S*0.12,   S*0.1,
      S*1.9,  S*0.12,  -S*0.1,
      S*1.9, -S*0.1,    0,
      S*2.65, -S*0.06,  0,
    ]);
    const idx = [0,1,2, 0,2,3, 0,3,4, 1,0,4, 2,1,4, 3,2,4];
    g.add(buildPart(idx.map(i=>[pts[i*3],pts[i*3+1],pts[i*3+2]]).flat(), bodyMat));
  }

  // ── Dorsal fin: tall swept triangle ──
  {
    const pts = new Float32Array([
      S*0.15,  S*0.52,   S*0.04,
      -S*0.35, S*0.52,   S*0.04,
      S*0.05,  S*0.52,  -S*0.04,
      -S*0.25, S*0.52,  -S*0.04,
      -S*0.08, S*1.28,   0,
    ]);
    const idx = [0,2,4, 2,3,4, 3,1,4, 1,0,4, 0,1,3, 0,3,2];
    g.add(buildPart(idx.map(i=>[pts[i*3],pts[i*3+1],pts[i*3+2]]).flat(), darkMat));
  }

  // ── Pectoral flippers: swept diamond ──
  [-1, 1].forEach(side => {
    const pts = new Float32Array([
      S*0.7,  -S*0.35,  side*S*0.42,
      S*0.35, -S*0.42,  side*S*0.42,
      S*0.55, -S*0.28,  side*S*0.9,
      S*0.15, -S*0.38,  side*S*0.82,
      S*0.5,  -S*0.46,  side*S*1.1,
    ]);
    const idx = [0,2,1, 2,3,1, 2,4,3];
    g.add(buildPart(idx.map(i=>[pts[i*3],pts[i*3+1],pts[i*3+2]]).flat(), darkMat));
  });

  // ── Horizontal flukes: two lobes ──
  [-1, 1].forEach(side => {
    const pts = new Float32Array([
      -S*1.55,  S*0.04,  side*S*0.06,
      -S*1.55, -S*0.04,  side*S*0.06,
      -S*1.78,  S*0.06,  side*S*0.32,
      -S*1.78, -S*0.06,  side*S*0.32,
      -S*2.1,   0,       side*S*0.62,
    ]);
    const idx = [0,2,1, 2,3,1, 2,4,3];
    g.add(buildPart(idx.map(i=>[pts[i*3],pts[i*3+1],pts[i*3+2]]).flat(), darkMat));
  });

  // ── Eye ──
  const eye = new THREE.Mesh(new THREE.SphereGeometry(S*0.1, 5, 5), eyeMat);
  eye.position.set(S*1.42, S*0.22, S*0.3);
  g.add(eye);

  // ── Eye stripe — dark patch around eye ──
  {
    const pts = new Float32Array([
      S*1.5,   S*0.32,  S*0.28,
      S*1.55,  S*0.08,  S*0.34,
      S*1.2,   S*0.1,   S*0.42,
      S*1.18,  S*0.35,  S*0.35,
    ]);
    const idx = [0,1,2, 0,2,3];
    g.add(buildPart(idx.map(i=>[pts[i*3],pts[i*3+1],pts[i*3+2]]).flat(),
      new THREE.MeshStandardMaterial({ color: 0x1a3a44, flatShading: true, roughness: 0.6 })));
  }

  return g;
}

function makeJellyfish(size, color) {
  const g = new THREE.Group();
  const col = new THREE.Color(color);

  // ── Bell dome — hand-built low-poly faceted BufferGeometry ──────────────────
  // 8 radial segments × 3 stacked rings gives a chunky angular silhouette.
  const SEGS = 8, RINGS = 3;
  const bellVerts = [], bellIdx = [];
  // apex
  bellVerts.push(0, size * 0.62, 0);
  // ring heights and radii (squashed dome profile)
  const ringData = [
    { y: size * 0.38, r: size * 0.58 },
    { y: size * 0.10, r: size * 0.92 },
    { y: -size * 0.08, r: size * 1.00 },  // widest lip
  ];
  for (let ri = 0; ri < RINGS; ri++) {
    const { y, r } = ringData[ri];
    for (let s = 0; s < SEGS; s++) {
      const a = (s / SEGS) * Math.PI * 2;
      bellVerts.push(Math.cos(a) * r, y, Math.sin(a) * r);
    }
  }
  // apex → ring 0
  for (let s = 0; s < SEGS; s++) {
    const a = 1 + s, b = 1 + (s + 1) % SEGS;
    bellIdx.push(0, a, b);
  }
  // ring to ring quads
  for (let ri = 0; ri < RINGS - 1; ri++) {
    const base0 = 1 + ri * SEGS, base1 = base0 + SEGS;
    for (let s = 0; s < SEGS; s++) {
      const a0 = base0 + s, a1 = base0 + (s + 1) % SEGS;
      const b0 = base1 + s, b1 = base1 + (s + 1) % SEGS;
      bellIdx.push(a0, b0, a1,  a1, b0, b1);
    }
  }
  const bellGeo = new THREE.BufferGeometry();
  bellGeo.setAttribute('position', new THREE.Float32BufferAttribute(bellVerts, 3));
  bellGeo.setIndex(bellIdx);
  bellGeo.computeVertexNormals();

  // Top half — saturated translucent bell colour
  const bellMatTop = new THREE.MeshStandardMaterial({
    color: col, transparent: true, opacity: 0.72,
    emissive: col, emissiveIntensity: 0.45,
    roughness: 0.25, metalness: 0.0,
    flatShading: true, side: THREE.FrontSide, depthWrite: false,
  });
  const bellMesh = new THREE.Mesh(bellGeo, bellMatTop);
  bellMesh.name = 'jellyBell';
  g.add(bellMesh);

  // Inner belly — paler tint, back-face so you see depth through the dome
  const bellMatInner = new THREE.MeshStandardMaterial({
    color: col, transparent: true, opacity: 0.30,
    emissive: col, emissiveIntensity: 0.2,
    roughness: 0.3, metalness: 0.0,
    flatShading: true, side: THREE.BackSide, depthWrite: false,
  });
  
  // const bellInner = new THREE.Mesh(bellGeo, bellMatInner);
  // bellInner.name = 'jellyBellInner';
  // g.add(bellInner);

  // ── Oral arms — 4 angular ribbon strips hanging from underside ──────────────
  const armMat = new THREE.MeshStandardMaterial({
    color: col, transparent: true, opacity: 0.60,
    emissive: col, emissiveIntensity: 0.55,
    roughness: 0.2, flatShading: true, side: THREE.DoubleSide, depthWrite: false,
  });
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const ax = Math.cos(angle) * size * 0.28, az = Math.sin(angle) * size * 0.28;
    // 3-segment ribbon, each segment is a squashed prism (triangular cross-section)
    const ASEGS = 3;
    const av = [], ai = [];
    const segLen = size * 0.65, segCount = 3;
    for (let seg = 0; seg <= segCount; seg++) {
      const py = -size * 0.08 - seg * segLen;
      const spread = size * 0.08 * (1 - seg / segCount * 0.6);
      for (let k = 0; k < ASEGS; k++) {
        const ka = (k / ASEGS) * Math.PI * 2;
        av.push(Math.cos(ka) * spread, py, Math.sin(ka) * spread);
      }
    }
    for (let seg = 0; seg < segCount; seg++) {
      const b0 = seg * ASEGS, b1 = b0 + ASEGS;
      for (let k = 0; k < ASEGS; k++) {
        const k1 = (k + 1) % ASEGS;
        ai.push(b0+k, b1+k, b0+k1,  b0+k1, b1+k, b1+k1);
      }
    }
    const armGeo = new THREE.BufferGeometry();
    armGeo.setAttribute('position', new THREE.Float32BufferAttribute(av, 3));
    armGeo.setIndex(ai);
    armGeo.computeVertexNormals();
    const arm = new THREE.Mesh(armGeo, armMat);
    arm.position.set(ax, 0, az);
    arm.rotation.y = angle;
    g.add(arm);
  }

  // ── Tentacles — thin 3-sided tapered strands ─────────────────────────────────
  const tentMat = new THREE.MeshStandardMaterial({
    color: col, transparent: true, opacity: 0.38,
    emissive: col, emissiveIntensity: 0.5,
    roughness: 0.3, flatShading: true, depthWrite: false,
  });
  const tentLengths = [1.8, 2.4, 1.5, 2.8, 2.0, 1.6, 2.5, 1.9];
  for (let i = 0; i < 4; i++) {
    const len = size * tentLengths[i];
    const tent = new THREE.Mesh(
      new THREE.CylinderGeometry(size * 0.018, size * 0.004, len, 3, 1),
      tentMat
    );
    const angle = (i / 8) * Math.PI * 2 + 0.2;
    tent.position.set(
      Math.cos(angle) * size * 0.78,
      -size * 0.08 - len * 0.5,
      Math.sin(angle) * size * 0.78
    );
    tent.rotation.z = Math.sin(angle) * 0.12;
    tent.rotation.x = Math.cos(angle) * 0.12;
    g.add(tent);
  }

  // Store bell ref + all emissive materials for bioluminescent glow pulse
  g.userData.isJelly   = true;
  g.userData.bellMesh  = bellMesh;
  // Collect every material on this jelly that carries an emissiveIntensity
  // so the animate loop can pulse them all in sync with the bell contraction.
  g.userData.jellyMats = [bellMatTop, bellMatInner, armMat, tentMat];

  return g;
}

function makeAnglerfish(size) {
  const g = new THREE.Group();
  g.userData.isFish = true;
  const S = size;

  const skinMat  = new THREE.MeshStandardMaterial({ color: 0x18181f, flatShading: true, roughness: 0.8, metalness: 0.0,
    emissive: 0x050508, emissiveIntensity: 0.3 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0x0a0a14, flatShading: true, roughness: 0.9, metalness: 0.0 });
  const finMat   = new THREE.MeshStandardMaterial({ color: 0x12121a, flatShading: true, roughness: 0.7, metalness: 0.0, side: THREE.DoubleSide });
  const toothMat = new THREE.MeshStandardMaterial({ color: 0xddddcc, flatShading: true, roughness: 0.3 });
  const eyeMat   = new THREE.MeshStandardMaterial({ color: 0x111100, flatShading: true, roughness: 0.1 });
  const stalkMat = new THREE.MeshStandardMaterial({ color: 0x282830, flatShading: true, roughness: 0.85 });

  function buildPart(vArr, idxArr, mat) {
    const pos = [];
    idxArr.forEach(i => { pos.push(vArr[i*3], vArr[i*3+1], vArr[i*3+2]); });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, mat);
  }

  // ── Body: bulbous low-poly with 12 verts ──
  // 0: nose, 1-4: front ring, 5-8: mid ring (widest), 9-12: rear ring, 13: tail
  const bv = new Float32Array([
    // 0: nose (wide mouth front)
     S*1.5,   0,        0,
    // 1-4: front ring
     S*0.8,   S*0.5,    S*0.45,
     S*0.8,  -S*0.55,   S*0.35,
     S*0.8,  -S*0.55,  -S*0.35,
     S*0.8,   S*0.5,   -S*0.45,
    // 5-8: mid ring (bulging body)
    -S*0.2,   S*0.85,   S*0.65,
    -S*0.2,  -S*0.7,    S*0.55,
    -S*0.2,  -S*0.7,   -S*0.55,
    -S*0.2,   S*0.85,  -S*0.65,
    // 9-12: rear ring (tapers)
    -S*1.1,   S*0.35,   S*0.28,
    -S*1.1,  -S*0.3,    S*0.22,
    -S*1.1,  -S*0.3,   -S*0.22,
    -S*1.1,   S*0.35,  -S*0.28,
    // 13: tail tip
    -S*1.7,   0,        0,
  ]);

  // Upper body faces
  const upperIdx = [
    0,1,4,  // nose top
    1,5,8,  1,8,4,  // front-to-mid top
    5,9,12, 5,12,8, // mid-to-rear top
    9,13,12, // rear top
  ];
  // Lower / side body faces
  const lowerIdx = [
    0,2,1,  0,3,2,  0,4,3, // nose bottom/sides
    1,2,6,  1,6,5, // front-to-mid side L
    4,8,7,  3,4,7, // front-to-mid side R
    2,3,7,  2,7,6, // front-to-mid belly
    5,6,10, 5,10,9, // mid-to-rear side L
    8,12,11, 7,8,11, // mid-to-rear side R
    6,7,11, 6,11,10, // mid-to-rear belly
    10,13,9, 10,11,13, 11,12,13, // rear bottom/sides
  ];

  g.add(buildPart(bv, upperIdx, skinMat));
  g.add(buildPart(bv, lowerIdx, bellyMat));

  // ── Lower jaw: flat wedge shape ──
  {
    const jv = new Float32Array([
       S*1.5,  -S*0.1,   0,       // 0: jaw tip (front)
       S*0.6,  -S*0.65,  S*0.3,   // 1: jaw back left
       S*0.6,  -S*0.65, -S*0.3,   // 2: jaw back right
       S*0.6,  -S*0.2,   0,       // 3: jaw hinge top
    ]);
    const ji = [0,1,3, 0,3,2, 0,2,1, 1,2,3];
    g.add(buildPart(jv, ji, bellyMat));
  }

  // ── Dorsal fin: angular triangle ──
  {
    const pos = new Float32Array([
       S*0.1,  S*0.85,  0,
      -S*0.8,  S*0.55,  0,
      -S*0.25, S*1.45,  0,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, finMat));
  }

  // ── Pectoral fins: swept triangles ──
  [-1, 1].forEach(side => {
    const pos = new Float32Array([
       S*0.3, -S*0.15, side * S*0.45,
      -S*0.3, -S*0.35, side * S*0.45,
       S*0.0, -S*0.25, side * S*1.0,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, finMat));
  });

  // ── Tail fin: two angular lobes ──
  [-1, 1].forEach(side => {
    const pos = new Float32Array([
      -S*1.7,  0,              0,
      -S*1.5,  side * S*0.15,  0,
      -S*2.3,  side * S*0.55,  0,
    ]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, finMat));
  });

  // ── Lure stalk: low-poly segmented line ──
  {
    const sv = new Float32Array([
       S*1.0,   S*0.5,    0,        // 0: base
       S*0.6,   S*1.1,    S*0.04,   // 1: mid
       S*1.0,   S*1.55,  -S*0.03,   // 2: tip bend
       S*1.35,  S*1.7,    0,        // 3: lure attach
       // thin offset verts for width
       S*1.0,   S*0.5,    S*0.06,   // 4
       S*0.6,   S*1.1,   -S*0.02,   // 5
       S*1.0,   S*1.55,   S*0.03,   // 6
       S*1.35,  S*1.7,    S*0.06,   // 7
    ]);
    const si = [0,1,5, 0,5,4, 1,2,6, 1,6,5, 2,3,7, 2,7,6];
    g.add(buildPart(sv, si, stalkMat));
  }

  // ── Glowing lure bulb: low-poly icosahedron ──
  const lureBulb = new THREE.Mesh(new THREE.IcosahedronGeometry(S * 0.2, 0),
    new THREE.MeshStandardMaterial({ color: 0x88ffcc, emissive: 0x00ffaa, emissiveIntensity: 4,
      transparent: true, opacity: 0.9, flatShading: true, roughness: 0.05 }));
  lureBulb.position.set(S * 1.35, S * 1.7, 0);
  g.add(lureBulb);

  /*
  // ── Teeth: low-poly cones (3 sides) ──
  const teethPositions = [
    [S*1.35, -S*0.05], [S*1.1, -S*0.12], [S*0.85, -S*0.08], [S*0.65, -S*0.02],
  ];
  teethPositions.forEach(([x, y]) => {
    // Upper teeth (pointing down)
    const tUp = new THREE.Mesh(new THREE.ConeGeometry(S * 0.045, S * 0.2, 3), toothMat);
    tUp.position.set(x, y, S * 0.28);
    tUp.rotation.x = Math.PI;
    g.add(tUp);
    // Lower teeth (pointing up)
    const tLo = new THREE.Mesh(new THREE.ConeGeometry(S * 0.04, S * 0.18, 3), toothMat);
    tLo.position.set(x, y - S * 0.35, S * 0.28);
    g.add(tLo);
  });
  */

  // ── Eye: low-poly spheres ──
  const eyeOuter = new THREE.Mesh(new THREE.IcosahedronGeometry(S * 0.18, 0), eyeMat);
  eyeOuter.position.set(S * 0.95, S * 0.28, S * 0.5);
  g.add(eyeOuter);
  const eyeIris = new THREE.Mesh(new THREE.IcosahedronGeometry(S * 0.12, 0),
    new THREE.MeshStandardMaterial({ color: 0xddcc00, emissive: 0xffdd00, emissiveIntensity: 1.4,
      flatShading: true, roughness: 0.05 }));
  eyeIris.position.set(S * 1.05, S * 0.28, S * 0.58);
  g.add(eyeIris);

  return g;
}

function makeSquid(size, color) {
  const g = new THREE.Group();
  const S = size;
  const col = new THREE.Color(color);

  // Helper: build indexed mesh from flat vertex array + index list
  function buildPart(vArr, idxArr, mat) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vArr), 3));
    geo.setIndex(idxArr);
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, mat);
  }

  // ── Materials ───────────────────────────────────────────────────────────────
  // Mantle skin — rich semi-transparent with bioluminescent emissive glow
  const mantleMat = new THREE.MeshStandardMaterial({
    color, flatShading: true, transparent: true, opacity: 0.88,
    emissive: col, emissiveIntensity: 0.30,
    roughness: 0.25, metalness: 0.0,
  });
  // Darker ventral strip down the underside of the mantle
  const mantleDarkMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color).multiplyScalar(0.45).getHex(),
    flatShading: true, transparent: true, opacity: 0.88,
    emissive: col, emissiveIntensity: 0.15,
    roughness: 0.3, metalness: 0.0,
  });
  // Head / neck band — slightly more opaque
  const headMat = new THREE.MeshStandardMaterial({
    color, flatShading: true, transparent: true, opacity: 0.92,
    emissive: col, emissiveIntensity: 0.35,
    roughness: 0.2, metalness: 0.0,
  });
  // Arms & tentacles — thin, translucent, strongly glowing
  const armMat = new THREE.MeshStandardMaterial({
    color, flatShading: true, transparent: true, opacity: 0.65,
    emissive: col, emissiveIntensity: 0.55,
    roughness: 0.2, metalness: 0.0, side: THREE.DoubleSide,
  });
  // Bioluminescent photophore dots — bright white-blue blooms
  const photophoreMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.6).getHex(),
    emissiveIntensity: 3.5,
    roughness: 0.05, metalness: 0.0,
    transparent: true, opacity: 0.92,
  });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.05, metalness: 0.3 });
  const eyeIrisMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.4).getHex(),
    emissive: col, emissiveIntensity: 1.8,
    roughness: 0.05, metalness: 0.0,
  });

  // ── Mantle: hand-crafted low-poly torpedo with 6-sided cross-section ────────
  // 6 rings along the body axis (Z = forwards / nose direction):
  //   nose tip → neck ring → upper-mantle ring → mid ring → rear ring → tail tip
  // Each ring has 6 vertices giving a hexagonal cross-section for a faceted look.
  const SIDES = 6;
  const mantleRings = [
    { z:  S*1.35, r: 0.0  },  // 0: tail apex
    { z:  S*0.80, r: S*0.18 }, // 1: tail taper
    { z:  S*0.10, r: S*0.44 }, // 2: widest mid-rear
    { z: -S*0.30, r: S*0.48 }, // 3: widest mid-front
    { z: -S*0.75, r: S*0.32 }, // 4: neck taper
    { z: -S*1.00, r: S*0.18 }, // 5: neck ring
  ];

  const mVerts = [];
  // apex (index 0)
  mVerts.push(0, 0, S*1.35);
  // rings 1-5 (6 verts each, starting at index 1)
  for (let ri = 1; ri < mantleRings.length; ri++) {
    const { z, r } = mantleRings[ri];
    for (let s = 0; s < SIDES; s++) {
      const a = (s / SIDES) * Math.PI * 2 - Math.PI / 6;
      mVerts.push(Math.cos(a) * r, Math.sin(a) * r, z);
    }
  }

  const mTopIdx = [], mBotIdx = [];
  // apex → ring 1  (triangles)
  for (let s = 0; s < SIDES; s++) {
    const a = 1 + s, b = 1 + (s + 1) % SIDES;
    // top half (Y > 0 vertices → skin colour)
    if (s < SIDES / 2) mTopIdx.push(0, a, b);
    else               mBotIdx.push(0, a, b);
  }
  // ring-to-ring quads
  for (let ri = 0; ri < mantleRings.length - 2; ri++) {
    const base0 = 1 + ri * SIDES;
    const base1 = base0 + SIDES;
    for (let s = 0; s < SIDES; s++) {
      const a0 = base0 + s,          a1 = base0 + (s + 1) % SIDES;
      const b0 = base1 + s,          b1 = base1 + (s + 1) % SIDES;
      // upper flanks → mantleMat, lower ventral strip → mantleDarkMat
      if (s < SIDES / 2) { mTopIdx.push(a0, b0, a1, a1, b0, b1); }
      else               { mBotIdx.push(a0, b0, a1, a1, b0, b1); }
    }
  }

  const mantleTop = buildPart(mVerts, mTopIdx, mantleMat);
  mantleTop.name = 'squidMantleTop';
  const mantleBot = buildPart(mVerts, mBotIdx, mantleDarkMat);
  mantleBot.name = 'squidMantleBot';
  g.add(mantleTop);
  g.add(mantleBot);

  // ── Head / neck block: low-poly barrel ──────────────────────────────────────
  // 3 rings: neck join, wide head, tentacle collar
  const headRings = [
    { z: -S*1.00, r: S*0.18 },
    { z: -S*1.35, r: S*0.38 },
    { z: -S*1.58, r: S*0.34 },
    { z: -S*1.72, r: S*0.28 },
  ];
  const hVerts = [];
  for (const { z, r } of headRings) {
    for (let s = 0; s < SIDES; s++) {
      const a = (s / SIDES) * Math.PI * 2 - Math.PI / 6;
      hVerts.push(Math.cos(a) * r, Math.sin(a) * r, z);
    }
  }
  const hIdx = [];
  for (let ri = 0; ri < headRings.length - 1; ri++) {
    const base0 = ri * SIDES, base1 = base0 + SIDES;
    for (let s = 0; s < SIDES; s++) {
      const a0 = base0 + s, a1 = base0 + (s + 1) % SIDES;
      const b0 = base1 + s, b1 = base1 + (s + 1) % SIDES;
      hIdx.push(a0, b0, a1, a1, b0, b1);
    }
  }
  const headMesh = buildPart(hVerts, hIdx, headMat);
  headMesh.name = 'squidHead';
  g.add(headMesh);

  // ── Lateral fins: two swept rhombus lobes at the tail ───────────────────────
  [-1, 1].forEach((side, fi) => {
    const fv = [
       S*0.85,  side*S*0.05,  S*1.10,   // 0 tail root
       S*0.25,  side*S*0.08,  S*0.60,   // 1 rear edge
       S*0.15,  side*S*0.08,  S*0.05,   // 2 front edge
       S*0.55,  side*S*0.05, -S*0.05,   // 3 leading tip — points forward
       S*0.55,  side*S*0.68,  S*0.55,   // 4 wingtip
    ];
    const fi2 = [0,4,1, 1,4,2, 0,1,4, 2,4,3];
    const finMesh = buildPart(fv, fi2, mantleMat);
    finMesh.name = 'squidFin' + fi;
    g.add(finMesh);
  });

  // ── 8 arms: low-poly tapered prisms fanning from tentacle collar ─────────────
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const spreadX = Math.cos(a) * S * 0.22;
    const spreadY = Math.sin(a) * S * 0.22;
    const armLen = S * 1.4 + (i % 3) * S * 0.1; // slight length variation
    // 3-sided tapered prism: 2 rings (base + tip) + base cap
    const bR = S * 0.055, tR = S * 0.008;
    const av = [
      // base ring (3 verts)
      spreadX + Math.cos(a) * bR,  spreadY + Math.sin(a) * bR,  -S*1.72,
      spreadX + Math.cos(a + 2.094) * bR, spreadY + Math.sin(a + 2.094) * bR, -S*1.72,
      spreadX + Math.cos(a + 4.189) * bR, spreadY + Math.sin(a + 4.189) * bR, -S*1.72,
      // tip ring (3 verts) — fanned outward
      spreadX * 2.6 + Math.cos(a) * tR, spreadY * 2.6 + Math.sin(a) * tR, -S*1.72 - armLen,
      spreadX * 2.6 + Math.cos(a + 2.094) * tR, spreadY * 2.6 + Math.sin(a + 2.094) * tR, -S*1.72 - armLen,
      spreadX * 2.6 + Math.cos(a + 4.189) * tR, spreadY * 2.6 + Math.sin(a + 4.189) * tR, -S*1.72 - armLen,
    ];
    const ai = [0,3,1, 1,3,4, 1,4,2, 2,4,5, 2,5,0, 0,5,3];
    const armMesh = buildPart(av, ai, armMat);
    armMesh.name = 'squidArm' + i;
    g.add(armMesh);
  }

/*
  // ── 2 long feeding tentacles — extra-long, slightly offset ──────────────────
  [0.32, -0.32].forEach((zOff, ti) => {
    const tentLen = S * 2.8;
    const bR = S * 0.03, tR = S * 0.005;
    const tv = [
       bR,  zOff,  -S*1.72,
      -bR,  zOff,  -S*1.72,
       0,   zOff + S*0.04, -S*1.72,
       bR * 1.8,  zOff * 1.4,  -S*1.72 - tentLen,
      -bR * 1.8,  zOff * 1.4,  -S*1.72 - tentLen,
       0,   zOff * 1.4 + S*0.02, -S*1.72 - tentLen,
    ];
    const ti2 = [0,3,1, 1,3,4, 1,4,2, 2,4,5, 2,5,0, 0,5,3];
    const tMesh = buildPart(tv, ti2, armMat);
    tMesh.name = 'squidTentacle' + ti;
    g.add(tMesh);
  });

  */

  // ── Eyes: large round sclera + glowing iris ──────────────────────────────────
  [-1, 1].forEach((side, ei) => {
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(S*0.18, 6, 5), eyeMat);
    sclera.position.set(side * S*0.32, S*0.04, -S*1.38);
    sclera.name = 'squidEye' + ei;
    g.add(sclera);
    const iris = new THREE.Mesh(new THREE.SphereGeometry(S*0.11, 5, 4), eyeIrisMat);
    iris.position.set(side * S*0.38, S*0.04, -S*1.46);
    iris.name = 'squidIris' + ei;
    g.add(iris);
  });

  // ── Photophores: scattered bioluminescent dot clusters ───────────────────────
  // Small bright spheres dotted along the ventral mantle and arms
  const photoPositions = [
    // ventral mantle dots (3 rows)
    [0, -S*0.45,  S*0.60], [S*0.16, -S*0.42,  S*0.40], [-S*0.16, -S*0.42,  S*0.40],
    [0, -S*0.47,  S*0.10], [S*0.18, -S*0.44, -S*0.05], [-S*0.18, -S*0.44, -S*0.05],
    // head / collar cluster
    [S*0.30, -S*0.22, -S*1.25], [-S*0.30, -S*0.22, -S*1.25],
    [S*0.20, -S*0.30, -S*1.48], [-S*0.20, -S*0.30, -S*1.48],
    // tail tip accent
    [0, 0, S*1.30],
  ];
  photoPositions.forEach((pos, pi) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(S*0.028, 4, 3), photophoreMat);
    dot.position.set(...pos);
    dot.name = 'squidPhoto' + pi;
    g.add(dot);
  });

  // Store refs for animate-loop bioluminescent pulse
  g.userData.isSquid      = true;
  g.userData.squidMats    = [mantleMat, mantleDarkMat, headMat, armMat];
  g.userData.photoMat     = photophoreMat;
  g.userData.eyeIrisMat   = eyeIrisMat;

  return g;
}

function makeShark(size) {
  const g = new THREE.Group();
  g.userData.isFish = true;

  const flatDark = new THREE.MeshLambertMaterial({ color: 0x3d5060, flatShading: true, roughness: 0.7, metalness: 0.0 });
  const flatBelly = new THREE.MeshLambertMaterial({ color: 0xd6dfe8, flatShading: true, roughness: 0.65, metalness: 0.0 });
  const flatSkin = new THREE.MeshLambertMaterial({ color: 0x6a8a9a, flatShading: true, roughness: 0.55, metalness: 0.05 });
  const eyeMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0a, roughness: 0.05, metalness: 0.2 });

  // --- Body: hand-crafted low-poly torpedo ---
  // Vertices: nose tip, two snout rings, wide mid-section, tail taper, tail tip
  const s = size;
  const bVerts = new Float32Array([
    // 0: nose tip
     s*2.0,  0.0,    0.0,
    // 1-4: snout ring
     s*1.5,  s*0.28, -s*0.18,
     s*1.5,  s*0.22,  s*0.22,
     s*1.5, -s*0.20,  s*0.18,
     s*1.5, -s*0.18, -s*0.20,
    // 5-8: mid-front ring (widest)
     s*0.4,  s*0.50, -s*0.32,
     s*0.4,  s*0.42,  s*0.42,
     s*0.4, -s*0.36,  s*0.38,
     s*0.4, -s*0.34, -s*0.38,
    // 9-12: mid-rear ring
    -s*0.8,  s*0.42, -s*0.28,
    -s*0.8,  s*0.36,  s*0.36,
    -s*0.8, -s*0.30,  s*0.30,
    -s*0.8, -s*0.28, -s*0.30,
    // 13-16: tail taper ring
    -s*1.7,  s*0.22, -s*0.14,
    -s*1.7,  s*0.18,  s*0.18,
    -s*1.7, -s*0.14,  s*0.14,
    -s*1.7, -s*0.13, -s*0.15,
    // 17: tail tip
    -s*2.2,  0.0,    0.0,
  ]);

  // Dorsal face indices (top faces — skin colour)
  const dorsalIdx = [
    // snout → mid-front (top)
    0,1,5,  0,5,6,  0,6,2,
    // mid-front → mid-rear (top)
    5,9,6,  9,10,6,
    // mid-rear → taper (top)
    9,13,10, 13,14,10,
    // taper → tail (top)
    13,17,14,
    // sides upper
    1,2,6,  1,6,5,
    2,3,7,  2,7,6,
    6,7,11, 6,11,10,
    10,11,15, 10,15,14,
  ];
  // Belly face indices (bottom faces — belly colour)
  const bellyIdx = [
    0,3,4,  0,4,8,  0,8,7,  0,7,3,
    7,8,12, 7,12,11,
    11,12,16, 11,16,15,
    15,16,17,
    3,8,7,  3,7,4,
    8,12,11, 8,11,7,
    4,3,8,
  ];

  function buildBodyPart(verts, indices, mat) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(verts.slice(), 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, mat);
  }
  const bodyTop = buildBodyPart(bVerts, dorsalIdx, flatSkin);
  bodyTop.name = 'sharkBodyTop';
  const bodyBot = buildBodyPart(bVerts, bellyIdx, flatBelly);
  bodyBot.name = 'sharkBodyBot';
  g.add(bodyTop);
  g.add(bodyBot);

  // --- Dorsal fin: tall swept quad prism ---
  const dorsalVerts = new Float32Array([
    -s*0.05,  s*0.48, -s*0.06,  // 0 base-front-left
    -s*0.05,  s*0.48,  s*0.06,  // 1 base-front-right
    -s*0.55,  s*1.12, -s*0.04,  // 2 tip-left
    -s*0.55,  s*1.12,  s*0.04,  // 3 tip-right
    -s*0.75,  s*0.48, -s*0.06,  // 4 base-rear-left
    -s*0.75,  s*0.48,  s*0.06,  // 5 base-rear-right
  ]);
  const dorsalFaces = [0,2,1, 1,2,3, 2,4,3, 3,4,5, 0,1,4, 1,5,4];
  const dorsalMesh = buildBodyPart(dorsalVerts, dorsalFaces, flatDark);
  dorsalMesh.name = 'sharkDorsal';
  g.add(dorsalMesh);

  // --- Caudal (tail) fin: heterocercal — upper lobe larger ---
  const caudalVerts = new Float32Array([
    -s*2.0,  s*0.08, -s*0.06,  // 0 root-left
    -s*2.0,  s*0.08,  s*0.06,  // 1 root-right
    -s*2.8,  s*0.72, -s*0.04,  // 2 upper tip left
    -s*2.8,  s*0.72,  s*0.04,  // 3 upper tip right
    -s*2.5, -s*0.40, -s*0.04,  // 4 lower tip left
    -s*2.5, -s*0.40,  s*0.04,  // 5 lower tip right
  ]);
  const caudalFaces = [0,2,1, 1,2,3, 0,1,4, 1,5,4, 0,4,2, 1,3,5];
  const caudalMesh = buildBodyPart(caudalVerts, caudalFaces, flatDark);
  caudalMesh.name = 'sharkCaudal';
  g.add(caudalMesh);

  // --- Pectoral fins: swept diamond plates ---
  [-1, 1].forEach((side, i) => {
    const pVerts = new Float32Array([
       s*0.9, -s*0.10,  side*s*0.12,  // 0 root-front
       s*0.3, -s*0.18,  side*s*0.12,  // 1 root-rear
       s*0.55, -s*0.38,  side*s*0.80, // 2 tip
       s*0.75, -s*0.14,  side*s*0.12, // 3 mid-top
    ]);
    const pFaces = [0,2,1, 0,3,2, 0,1,3];
    const pMesh = buildBodyPart(pVerts, pFaces, flatDark);
    pMesh.name = 'sharkPec' + i;
    g.add(pMesh);
  });

  // --- Anal / second dorsal (small stabiliser) ---
  const anal2Verts = new Float32Array([
    -s*1.2,  s*0.12, -s*0.05,
    -s*1.2,  s*0.12,  s*0.05,
    -s*1.5,  s*0.48, -s*0.04,
    -s*1.5,  s*0.48,  s*0.04,
    -s*1.65, s*0.12, -s*0.05,
    -s*1.65, s*0.12,  s*0.05,
  ]);
  const anal2Faces = [0,2,1, 1,2,3, 2,4,3, 3,4,5, 0,1,4, 1,5,4];
  const anal2Mesh = buildBodyPart(anal2Verts, anal2Faces, flatDark);
  anal2Mesh.name = 'sharkAnal2';
  g.add(anal2Mesh);

  // --- Eyes ---
  [-1, 1].forEach((side, i) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(s * 0.075, 5, 4), eyeMat);
    eye.position.set(s * 1.45, s * 0.18, side * s * 0.28);
    eye.name = 'sharkEye' + i;
    g.add(eye);
  });

  return g;
}

function makeMantaRay(size) {
  const g = new THREE.Group();
  g.userData.isFish = true;

  const s = size;
  const flatBody  = new THREE.MeshStandardMaterial({ color: 0x1a2a3a, flatShading: true, roughness: 0.65, metalness: 0.05 });
  const flatBelly = new THREE.MeshStandardMaterial({ color: 0xd8dfe8, flatShading: true, roughness: 0.60, metalness: 0.0  });
  const flatFin   = new THREE.MeshStandardMaterial({ color: 0x111e2a, flatShading: true, roughness: 0.70, metalness: 0.0  });
  const eyeMat    = new THREE.MeshStandardMaterial({ color: 0x080808, roughness: 0.05, metalness: 0.2 });

  // Helper: build a mesh from shared vertex buffer + index list
  function buildPart(verts, indices, mat) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, mat);
  }

  // ── Wing pivot groups — each pivots about the body centreline (Z=0) ──────
  // wingLeft  covers the -Z (left)  half of the disc
  // wingRight covers the +Z (right) half of the disc
  // Flap animation rotates these on X in the animate loop.
  const wingLeft  = new THREE.Group(); wingLeft.name  = 'mantaWingLeft';
  const wingRight = new THREE.Group(); wingRight.name = 'mantaWingRight';
  g.add(wingLeft);
  g.add(wingRight);
  // Store refs so the animate loop can reach them without traversal
  g.userData.wingLeft  = wingLeft;
  g.userData.wingRight = wingRight;
  g.userData.isManta   = true;

  // ── Left wing (−Z side) top + belly ─────────────────────────────────────
  // Shared verts for the left half: all points at Z <= 0 plus the centreline
  const lVerts = [
    // 0: nose tip           1: left wing tip          2: tail root top
     s*1.10,  s*0.06,  0.0,   s*0.10,  s*0.10, -s*2.20,  -s*1.30,  s*0.04,  0.0,
    // 3: left mid-leading   4: left mid-trailing       5: centre dome
     s*0.70,  s*0.14, -s*1.10, -s*0.55,  s*0.10, -s*1.30,  s*0.05,  s*0.22,  0.0,
    // 6: nose bottom        7: tail root bottom         8: centre belly
     s*1.10, -s*0.04,  0.0,  -s*1.30, -s*0.04,  0.0,   s*0.05, -s*0.08,  0.0,
    // 9: left mid belly    10: left rear belly          11: left wing bottom
     s*0.70, -s*0.06, -s*1.10, -s*0.55, -s*0.06, -s*1.30,  s*0.10, -s*0.05, -s*2.20,
  ];
  const lTopIdx    = [0,3,5, 3,1,5, 1,4,5, 4,2,5,  0,5,3];
  const lBellyIdx  = [6,8,9, 8,11,9, 11,10,9, 10,7,9,  6,9,8];
  const lTop  = buildPart(lVerts, lTopIdx,   flatBody);  lTop.name  = 'mantaLWingTop';
  const lBot  = buildPart(lVerts, lBellyIdx, flatBelly); lBot.name  = 'mantaLWingBot';
  wingLeft.add(lTop);
  wingLeft.add(lBot);

  // ── Right wing (+Z side) top + belly ────────────────────────────────────
  const rVerts = [
    // 0: nose tip           1: right wing tip         2: tail root top
     s*1.10,  s*0.06,  0.0,   s*0.10,  s*0.10,  s*2.20,  -s*1.30,  s*0.04,  0.0,
    // 3: right mid-leading  4: right mid-trailing      5: centre dome
     s*0.70,  s*0.14,  s*1.10, -s*0.55,  s*0.10,  s*1.30,  s*0.05,  s*0.22,  0.0,
    // 6: nose bottom        7: tail root bottom         8: centre belly
     s*1.10, -s*0.04,  0.0,  -s*1.30, -s*0.04,  0.0,   s*0.05, -s*0.08,  0.0,
    // 9: right mid belly   10: right rear belly         11: right wing bottom
     s*0.70, -s*0.06,  s*1.10, -s*0.55, -s*0.06,  s*1.30,  s*0.10, -s*0.05,  s*2.20,
  ];
  const rTopIdx    = [0,5,3, 3,5,1, 1,5,4, 4,5,2,  0,3,5];
  const rBellyIdx  = [6,9,8, 8,9,11, 11,9,10, 10,9,7,  6,8,9];
  const rTop  = buildPart(rVerts, rTopIdx,   flatBody);  rTop.name  = 'mantaRWingTop';
  const rBot  = buildPart(rVerts, rBellyIdx, flatBelly); rBot.name  = 'mantaRWingBot';
  wingRight.add(rTop);
  wingRight.add(rBot);

  // ── Cephalic horns (two swept forward lobes at nose) ────────────────────
  [-1, 1].forEach((side, i) => {
    const hVerts = [
       s*1.10,  s*0.05,  side*s*0.05,
       s*1.40,  s*0.08,  side*s*0.35,
       s*1.55, -s*0.02,  side*s*0.55,
       s*0.90,  s*0.02,  side*s*0.30,
    ];
    const hFaces = [0,1,3, 1,2,3, 0,2,1];
    const horn = buildPart(hVerts, hFaces, flatFin);
    horn.name = 'mantaHorn' + i;
    // Attach horns to the matching wing group so they flap with it
    (side === -1 ? wingLeft : wingRight).add(horn);
  });

  // ── Tail: long thin whip — attached to body centre ───────────────────────
  const tailVerts = [
    -s*1.30,  s*0.04,  s*0.06,
    -s*1.30,  s*0.04, -s*0.06,
    -s*2.80,  s*0.00,  s*0.02,
    -s*2.80,  s*0.00, -s*0.02,
    -s*3.80, -s*0.04,  s*0.01,
    -s*3.80, -s*0.04, -s*0.01,
  ];
  const tailFaces = [0,1,2, 1,3,2, 2,3,4, 3,5,4];
  const tail = buildPart(tailVerts, tailFaces, flatFin);
  tail.name = 'mantaTail';
  g.add(tail);

  // ── Eyes: small dark spheres set at the head sides ───────────────────────
  [-1, 1].forEach((side, i) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(s * 0.06, 5, 4), eyeMat);
    eye.position.set(s * 0.85, s * 0.10, side * s * 0.28);
    eye.name = 'mantaEye' + i;
    g.add(eye);
  });

  return g;
}

function makeSeaCucumber(size) {
  const g = new THREE.Group();
  const skinMat = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.9, metalness: 0.0 });
  const tentMat = new THREE.MeshStandardMaterial({ color: 0xd2691e, roughness: 0.65,
    emissive: 0x3a1500, emissiveIntensity: 0.3 });
  // Body
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(size * 0.35, size * 1.8, 5, 10), skinMat);
  body.rotation.z = Math.PI / 2;
  g.add(body);
  // Papillae — 2 rows, 6 bumps each (shared geometry)
  const bumpGeo = new THREE.CylinderGeometry(size * 0.04, size * 0.06, size * 0.14, 4);
  const bumpMat = new THREE.MeshStandardMaterial({ color: 0x7a3c0f, roughness: 0.95 });
  for (let row = 0; row < 3; row++) {
    const rowAngle = (row / 3) * Math.PI * 2;
    for (let col = 0; col < 6; col++) {
      const bump = new THREE.Mesh(bumpGeo, bumpMat);
      bump.position.set(
        (col / 5 - 0.5) * size * 1.6,
        Math.cos(rowAngle) * size * 0.37,
        Math.sin(rowAngle) * size * 0.37
      );
      bump.rotation.x = rowAngle;
      g.add(bump);
    }
  }
  // Oral tentacles (6)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const tent = new THREE.Mesh(
      new THREE.CylinderGeometry(size * 0.03, size * 0.05, size * 0.3, 4), tentMat);
    tent.position.set(size * 1.05, Math.cos(a) * size * 0.17, Math.sin(a) * size * 0.17);
    tent.rotation.z = Math.cos(a) * 0.5 + Math.PI / 2;
    g.add(tent);
  }
  return g;
}

function makeGulperEel(size) {
  const g = new THREE.Group();
  const skinMat = new THREE.MeshStandardMaterial({ color: 0x0d0d1a, roughness: 0.7, metalness: 0.0,
    emissive: 0x040408, emissiveIntensity: 0.2 });
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x1a0000, roughness: 0.8,
    emissive: 0x0a0000, emissiveIntensity: 0.3 });
  // Balloon jaw
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(size * 0.52, 8, 7), mouthMat);
  jaw.scale.set(1.35, 0.95, 1.0);
  jaw.position.set(-size * 0.38, -size * 0.12, 0);
  g.add(jaw);
  // Skull
  const skull = new THREE.Mesh(new THREE.SphereGeometry(size * 0.35, 7, 6), skinMat);
  skull.position.set(-size * 0.28, size * 0.22, 0);
  g.add(skull);
  // Body segments (8 instead of 16)
  for (let i = 0; i < 8; i++) {
    const frac = i / 7;
    const radius = Math.max(size * (0.28 - frac * 0.23), 0.01);
    const seg = new THREE.Mesh(new THREE.SphereGeometry(radius, 6, 5), skinMat);
    seg.position.set(i * size * 0.55, Math.sin(i * 0.7) * size * 0.16, 0);
    g.add(seg);
  }
  // Tail tip
  const tail = new THREE.Mesh(new THREE.SphereGeometry(size * 0.07, 6, 6),
    new THREE.MeshStandardMaterial({ color: 0xff00ff, emissive: 0xcc00cc, emissiveIntensity: 2.5, transparent: true, opacity: 0.85 }));
  tail.position.set(7 * size * 0.55, 0, 0);
  g.add(tail);
  // Eyes
  [-1, 1].forEach(side => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(size * 0.11, 6, 6),
      new THREE.MeshStandardMaterial({ color: 0x003300, emissive: 0x00ff44, emissiveIntensity: 0.7 }));
    eye.position.set(-size * 0.12, size * 0.3, side * size * 0.28);
    g.add(eye);
  });
  return g;
}

// ─── Populate Zones with Creatures ───────────────────────────────────────────
const allCreatures = [];

function addCreature(mesh, zoneId, floatAmp = 0.06, floatSpeed = 0.8) {
  const z = zones[zoneId];
  const yMin = z.y - z.height / 2 + 0.5;
  const yMax = z.y + z.height / 2 - 0.5;
  mesh.position.y = yMin + Math.random() * (yMax - yMin);
  mesh.position.x = (Math.random() - 0.5) * (CUBE_W - 2);
  mesh.position.z = (Math.random() - 0.5) * (CUBE_D - 2);
  mesh.userData = {
    zoneId, floatAmp, floatSpeed,
    floatOffset: Math.random() * Math.PI * 2,
    baseY: mesh.position.y,
    baseX: mesh.position.x,
    driftDir: (Math.random() - 0.5) * 0.003,
    rotSpeed: (Math.random() - 0.5) * 0.005,
    wobblePhase: Math.random() * Math.PI * 2,
    isFish:       !!mesh.userData.isFish,
    isManta:      !!mesh.userData.isManta,
    isJelly:      !!mesh.userData.isJelly,
    isSquid:      !!mesh.userData.isSquid,
    wingLeft:     mesh.userData.wingLeft    || null,
    wingRight:    mesh.userData.wingRight   || null,
    bellMesh:     mesh.userData.bellMesh    || null,
    jellyMats:    mesh.userData.jellyMats   || null,
    squidMats:    mesh.userData.squidMats   || null,
    photoMat:     mesh.userData.photoMat    || null,
    eyeIrisMat:   mesh.userData.eyeIrisMat  || null,
  };
  scene.add(mesh);
  allCreatures.push(mesh);
}

// Zone 0 – Sunlight
const dolphin1 = makeDolphin(0.32); dolphin1.name = 'dolphin1'; addCreature(dolphin1, 0, 0.08, 1.2);
const dolphin2 = makeDolphin(0.28); dolphin2.name = 'dolphin2'; addCreature(dolphin2, 0, 0.1, 1.0);
const shark1 = makeShark(0.4); shark1.name = 'shark1'; addCreature(shark1, 0, 0.05, 0.6);
const fish1 = makeFish(0x1a8a7a, 0.18); fish1.name = 'fish1'; addCreature(fish1, 0, 0.12, 1.5);
const fish2 = makeFish(0x2da89c, 0.15); fish2.name = 'fish2'; addCreature(fish2, 0, 0.15, 1.8);
const fish3 = makeFish(0x0e7a6e, 0.16); fish3.name = 'fish3'; addCreature(fish3, 0, 0.1, 1.3);
const fish4 = makeFish(0x3bbfb0, 0.14); fish4.name = 'fish4'; addCreature(fish4, 0, 0.13, 1.6);
const jelly1 = makeJellyfish(0.3, 0xee88ff); jelly1.name = 'jelly1'; addCreature(jelly1, 0, 0.07, 0.5);
const jelly2 = makeJellyfish(0.25, 0xff88aa); jelly2.name = 'jelly2'; addCreature(jelly2, 0, 0.09, 0.7);
const mantaRay = makeMantaRay(0.55); mantaRay.name = 'mantaRay'; addCreature(mantaRay, 0, 0.05, 0.38);

// Zone 1 – Twilight
const squid1 = makeSquid(0.35, 0x9933ff); squid1.name = 'squid1'; addCreature(squid1, 1, 0.06, 0.9);
const squid2 = makeSquid(0.3, 0x33aaff); squid2.name = 'squid2'; addCreature(squid2, 1, 0.08, 1.1);
const lanternFish1 = makeFish(0x113355, 0.18, 0x00ffff); lanternFish1.name = 'lanternFish1'; addCreature(lanternFish1, 1, 0.07, 1.0);
const lanternFish2 = makeFish(0x112244, 0.15, 0x88ffff); lanternFish2.name = 'lanternFish2'; addCreature(lanternFish2, 1, 0.09, 1.2);
const lanternFish3 = makeFish(0x0d1a33, 0.16, 0x44ffaa); lanternFish3.name = 'lanternFish3'; addCreature(lanternFish3, 1, 0.06, 0.8);
const hatchet = makeFish(0x334466, 0.2, 0xaaffff); hatchet.scale.set(0.7, 1.5, 0.4); hatchet.name = 'hatchet'; addCreature(hatchet, 1, 0.05, 0.7);
const jelly3 = makeJellyfish(0.28, 0x4444ff); jelly3.name = 'jelly3'; addCreature(jelly3, 1, 0.06, 0.4);

// Zone 2 – Midnight
const angler1 = makeAnglerfish(0.35); angler1.name = 'angler1'; addCreature(angler1, 2, 0.04, 0.5);
const angler2 = makeAnglerfish(0.28); angler2.name = 'angler2'; addCreature(angler2, 2, 0.05, 0.6);
const gulper1 = makeGulperEel(0.3); gulper1.name = 'gulper1'; addCreature(gulper1, 2, 0.03, 0.4);
const viper1 = makeFish(0x0a0a14, 0.22, 0x00ff88); viper1.name = 'viper1'; addCreature(viper1, 2, 0.04, 0.5);
const squid3 = makeSquid(0.4, 0x220033); squid3.name = 'squid3'; addCreature(squid3, 2, 0.03, 0.3);
const jelly4 = makeJellyfish(0.32, 0x0000cc); jelly4.name = 'jelly4'; addCreature(jelly4, 2, 0.05, 0.3);

// Zone 3 – Abyss
const seaCuc1 = makeSeaCucumber(0.35); seaCuc1.name = 'seaCuc1'; addCreature(seaCuc1, 3, 0.02, 0.2);
const seaCuc2 = makeSeaCucumber(0.3); seaCuc2.name = 'seaCuc2'; addCreature(seaCuc2, 3, 0.02, 0.25);
const tripodFish = makeFish(0x111111, 0.2, 0xffffff); tripodFish.name = 'tripodFish'; addCreature(tripodFish, 3, 0.02, 0.3);
const dumboOcto = makeJellyfish(0.35, 0xff88cc); dumboOcto.name = 'dumboOcto'; addCreature(dumboOcto, 3, 0.03, 0.25);
const isopod = makeFish(0x444444, 0.22, 0xdddddd); isopod.scale.set(0.7, 0.5, 1.2); isopod.name = 'isopod'; addCreature(isopod, 3, 0.015, 0.15);
const jelly5 = makeJellyfish(0.22, 0x003333); jelly5.name = 'jelly5'; addCreature(jelly5, 3, 0.025, 0.2);



// ─── Ship ─────────────────────────────────────────────────────────────────────
// Low-poly flat-shaded research vessel — matches the creature aesthetic
const shipGroup = new THREE.Group();
shipGroup.name = 'shipGroup';
shipGroup.position.set(0, 0, 0);
scene.add(shipGroup);

// ── Shared materials (flat-shaded to match creature style) ────────────────
const shipHullMat   = new THREE.MeshStandardMaterial({ color: 0xcc2200, flatShading: true, roughness: 0.70, metalness: 0.05 });
const shipBellyMat  = new THREE.MeshStandardMaterial({ color: 0x991a00, flatShading: true, roughness: 0.75, metalness: 0.05 });
const shipDeckMat   = new THREE.MeshStandardMaterial({ color: 0xe8e4d8, flatShading: true, roughness: 0.60, metalness: 0.0  });
const shipWhiteMat  = new THREE.MeshStandardMaterial({ color: 0xf0eeea, flatShading: true, roughness: 0.50, metalness: 0.0  });
const shipOrangeMat = new THREE.MeshStandardMaterial({ color: 0xe05500, flatShading: true, roughness: 0.55, metalness: 0.0  });
const shipDarkMat   = new THREE.MeshStandardMaterial({ color: 0x1c1c20, flatShading: true, roughness: 0.90, metalness: 0.0  });
const shipGreyMat   = new THREE.MeshStandardMaterial({ color: 0x7a8a8e, flatShading: true, roughness: 0.55, metalness: 0.35 });
const shipMastMat   = new THREE.MeshStandardMaterial({ color: 0xb8c0c4, flatShading: true, roughness: 0.45, metalness: 0.50 });

// ── Helper: build a flat-shaded mesh from vertex + index arrays ───────────
function buildShipPart(vArr, idxArr, mat) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vArr), 3));
  geo.setIndex(idxArr);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, mat);
}

// ── Hull — low-poly 8-point prism: pointed bow, flat stern, keel-to-deck ──
// Cross-section has 4 verts per ring: top-port, top-star, keel-port, keel-star
// Bow ring is narrow/pointed; mid ring is widest; stern ring is flat & wide.
//   x = fore-aft (positive = bow),  y = up,  z = port-starboard
const hullVerts = [
  // 0,1: bow tip (top pair — tiny width, high up)
   1.92,  0.22, -0.08,   1.92,  0.22,  0.08,
  // 2,3: bow waterline (where hull meets water)
   1.80,  0.00, -0.22,   1.80,  0.00,  0.22,
  // 4,5: bow keel
   1.65, -0.44, -0.16,   1.65, -0.44,  0.16,
  // 6,7: mid-top (widest at deck level)
  -0.20,  0.22, -0.58,  -0.20,  0.22,  0.58,
  // 8,9: mid-waterline
  -0.20,  0.00, -0.62,  -0.20,  0.00,  0.62,
  // 10,11: mid-keel
  -0.20, -0.52, -0.40,  -0.20, -0.52,  0.40,
  // 12,13: stern-top
  -1.88,  0.22, -0.52,  -1.88,  0.22,  0.52,
  // 14,15: stern-waterline
  -1.88,  0.00, -0.54,  -1.88,  0.00,  0.54,
  // 16,17: stern-keel
  -1.88, -0.46, -0.38,  -1.88, -0.46,  0.38,
];

// Top deck faces (deck colour — seen from above)
const hullDeckIdx = [
  // bow-tip → mid-top
  0,6,1,  1,6,7,
  // mid-top → stern-top
  6,12,7,  7,12,13,
  // bow wedge top
  0,1,2,  1,3,2,
];
// Upper topsides (white band — above waterline, sides)
const hullSideIdx = [
  // port side upper: bow-wl → mid-wl → stern-wl (top strip)
  0,2,6,  2,8,6,   6,8,12,  8,14,12,
  // starboard side upper
  1,7,3,  3,7,9,   7,13,9,  9,13,15,
];
// Red lower hull (below waterline)
const hullRedIdx = [
  // port lower bow
  2,4,8,  4,10,8,
  // starboard lower bow
  3,9,5,  5,9,11,
  // port stern
  8,10,14,  10,16,14,
  // starboard stern
  9,15,11,  11,15,17,
  // bow face
  2,3,4,  3,5,4,
  // stern face
  14,16,15,  15,16,17,
];
// Keel bottom
const hullKeelIdx = [
  4,5,10,  5,11,10,  10,11,16,  11,17,16,
];

const hullDeck  = buildShipPart(hullVerts, hullDeckIdx,  shipDeckMat);  hullDeck.name  = 'hullDeck';
const hullSide  = buildShipPart(hullVerts, hullSideIdx,  shipWhiteMat); hullSide.name  = 'hullSide';
const hullRed2  = buildShipPart(hullVerts, hullRedIdx,   shipHullMat);  hullRed2.name  = 'hullRed';
const hullKeel  = buildShipPart(hullVerts, hullKeelIdx,  shipBellyMat); hullKeel.name  = 'hullKeel';
[hullDeck, hullSide, hullRed2, hullKeel].forEach(m => { m.castShadow = true; shipGroup.add(m); });

// ── Waterline stripe — thin dark band around the hull at y=0 ──────────────
// Two thin quads: port and starboard sides
[-1, 1].forEach((side, si) => {
  const zO = side * 0.61;
  const sv = [
     1.80, -0.04, zO,   1.80,  0.04, zO,
    -1.88,  0.04, zO,  -1.88, -0.04, zO,
  ];
  const sm = buildShipPart(sv, [0,1,3, 1,2,3], shipDarkMat);
  sm.name = 'waterlineStripe_' + si;
  shipGroup.add(sm);
});

// ── Bow bulb — small pointed prism below waterline ─────────────────────────
const bowBulbVerts = [
   2.12, -0.30,  0.00,   // 0: tip
   1.82, -0.22, -0.12,   // 1
   1.82, -0.22,  0.12,   // 2
   1.62, -0.46, -0.10,   // 3
   1.62, -0.46,  0.10,   // 4
];
const bowBulb = buildShipPart(bowBulbVerts, [0,1,2, 1,3,2, 3,4,2, 1,0,3, 2,4,0, 3,0,4], shipBellyMat);
bowBulb.name = 'bowBulb';
shipGroup.add(bowBulb);

// ── Main deck — low flat slab, sits on top of hull ─────────────────────────
const deckSlab = new THREE.Mesh(new THREE.BoxGeometry(3.82, 0.06, 1.16), shipDeckMat);
deckSlab.name = 'deckSlab';
deckSlab.position.set(0.02, 0.25, 0);
deckSlab.castShadow = true;
shipGroup.add(deckSlab);

// ── Deckhouse — chunky 6-sided block rear-centre (flat-shaded prism) ──────
// Cross-section: slight taper from base to roof — gives the block character
const dhVerts = [
  // base (y=0.28 above deck)
  -0.15, 0.28, -0.42,  -0.15, 0.28,  0.42,
  -1.48, 0.28, -0.38,  -1.48, 0.28,  0.38,
  // roof (y=0.88)
  -0.20, 0.88, -0.36,  -0.20, 0.88,  0.36,
  -1.44, 0.88, -0.32,  -1.44, 0.88,  0.32,
];
const dhFaces = [
  // front face
  0,4,1,  1,4,5,
  // rear face
  2,3,6,  3,7,6,
  // port side
  0,2,4,  2,6,4,
  // starboard side
  1,5,3,  3,5,7,
  // roof
  4,6,5,  5,6,7,
  // base (deck surface hidden — skip)
];
const deckhouse = buildShipPart(dhVerts, dhFaces, shipWhiteMat);
deckhouse.name = 'deckhouse';
deckhouse.castShadow = true;
shipGroup.add(deckhouse);

// ── Wheelhouse — sits on top of deckhouse, slightly narrower ──────────────
const whVerts = [
  -0.22, 0.88, -0.30,  -0.22, 0.88,  0.30,
  -1.05, 0.88, -0.28,  -1.05, 0.88,  0.28,
  -0.26, 1.36, -0.26,  -0.26, 1.36,  0.26,
  -1.02, 1.36, -0.24,  -1.02, 1.36,  0.24,
];
const whFaces = [
  0,4,1,  1,4,5,
  2,3,6,  3,7,6,
  0,2,4,  2,6,4,
  1,5,3,  3,5,7,
  4,6,5,  5,6,7,
];
const wheelhouse = buildShipPart(whVerts, whFaces, shipWhiteMat);
wheelhouse.name = 'wheelhouse';
wheelhouse.castShadow = true;
shipGroup.add(wheelhouse);

// Bridge windows — dark inset panels on the forward face of wheelhouse
[-0.18, 0, 0.18].forEach((zOff, wi) => {
  const win = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.14), shipDarkMat);
  win.name = 'win_' + wi;
  win.position.set(-0.23, 1.10, zOff);
  shipGroup.add(win);
});

// Bridge wings — swept flat triangular overhangs, port + starboard
[-1, 1].forEach((side, si) => {
  const bwv = [
    -0.22, 1.36,  side*0.28,
    -0.22, 1.36,  side*0.52,
    -0.90, 1.36,  side*0.48,
    -0.90, 1.36,  side*0.28,
    -0.22, 1.30,  side*0.28,
    -0.22, 1.30,  side*0.52,
    -0.90, 1.30,  side*0.48,
    -0.90, 1.30,  side*0.28,
  ];
  const bwf = [
    // top face
    0,1,3,  1,2,3,
    // bottom face
    4,7,5,  5,7,6,
    // outer edge
    1,5,2,  2,5,6,
    // bow edge
    0,4,1,  1,4,5,
    // stern edge
    2,6,3,  3,6,7,
  ];
  const bw = buildShipPart(bwv, bwf, shipWhiteMat);
  bw.name = 'bridgeWing_' + si;
  shipGroup.add(bw);
});

// ── Orange funnel — low-poly 6-sided tapered prism ─────────────────────────
const FSIDES = 6;
const funnelVerts = [], funnelIdx = [];
for (let s = 0; s < FSIDES; s++) {
  const a = (s / FSIDES) * Math.PI * 2;
  funnelVerts.push(Math.cos(a) * 0.20, 0.88, Math.sin(a) * 0.20);   // base ring
}
for (let s = 0; s < FSIDES; s++) {
  const a = (s / FSIDES) * Math.PI * 2;
  funnelVerts.push(Math.cos(a) * 0.14, 1.46, Math.sin(a) * 0.14);   // top ring
}
// base cap centre
funnelVerts.push(0, 0.88, 0);
// side faces
for (let s = 0; s < FSIDES; s++) {
  const a = s, b = (s + 1) % FSIDES;
  funnelIdx.push(a, b + FSIDES, b,  a, a + FSIDES, b + FSIDES);
}
// base cap
for (let s = 0; s < FSIDES; s++) {
  funnelIdx.push(FSIDES * 2, (s + 1) % FSIDES, s);
}
const funnelMesh = buildShipPart(
  funnelVerts.map((v, i) => {
    // offset funnel to sit on deckhouse, slightly forward of centre
    const coord = i % 3;
    if (coord === 0) return v - 0.55;   // x offset
    if (coord === 2) return v;
    return v;
  }),
  funnelIdx, shipOrangeMat
);
funnelMesh.name = 'funnel';
funnelMesh.castShadow = true;
shipGroup.add(funnelMesh);

// Funnel cap — flat dark disc on top
const funnelCap = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.145, 0.055, 6), shipDarkMat);
funnelCap.name = 'funnelCap';
funnelCap.position.set(-0.55, 1.49, 0);
shipGroup.add(funnelCap);

// Funnel stripe — horizontal ring of contrasting white near top
const funnelStripe = new THREE.Mesh(new THREE.CylinderGeometry(0.152, 0.152, 0.07, 6), shipWhiteMat);
funnelStripe.name = 'funnelStripe';
funnelStripe.position.set(-0.55, 1.30, 0);
shipGroup.add(funnelStripe);

// ── A-frame crane / gantry — stern survey deck ────────────────────────────
// Two swept legs meeting at a crossbar apex
[-1, 1].forEach((side, gi) => {
  const legV = [
    1.30,  0.28, side * 0.44,   // base foot
    1.30,  0.28, side * 0.30,
    0.92,  1.02, side * 0.08,   // apex
    0.92,  1.02, side * 0.04,
  ];
  const legF = [0, 2, 1,  1, 2, 3,  0, 1, 3,  0, 3, 2];
  const leg = buildShipPart(legV, legF, shipGreyMat);
  leg.name = 'gantryLeg_' + gi;
  shipGroup.add(leg);
});
// Crossbar at top of gantry
const gantryBar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.22), shipGreyMat);
gantryBar.name = 'gantryBar';
gantryBar.position.set(0.92, 1.02, 0);
shipGroup.add(gantryBar);

// ── Forward A-frame mast ──────────────────────────────────────────────────
// Two angled poles meeting at top, with yard arm
[-1, 1].forEach((side, mi) => {
  const mlV = [
    -0.28, 0.28, side * 0.22,
    -0.28, 0.28, side * 0.14,
    -0.30, 1.72, side * 0.03,
    -0.30, 1.72, side * 0.00,
  ];
  const mlF = [0,2,1, 1,2,3, 0,1,3, 0,3,2];
  const ml = buildShipPart(mlV, mlF, shipMastMat);
  ml.name = 'mastLeg_' + mi;
  shipGroup.add(ml);
});
// Yard arm (horizontal crossbar)
const yardArm = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.72), shipMastMat);
yardArm.name = 'yardArm';
yardArm.position.set(-0.30, 2.05, 0);
shipGroup.add(yardArm);
// Vertical mast pole above cross
const mastPole = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.52, 0.04), shipMastMat);
mastPole.name = 'mastPole';
mastPole.position.set(-0.30, 1.98, 0);
shipGroup.add(mastPole);

// ── Radar scanner — flat hexagonal disc on a short pole ───────────────────
const radarPole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.22, 5), shipGreyMat);
radarPole.name = 'radarPole';
radarPole.position.set(-0.30, 2.36, 0);
shipGroup.add(radarPole);
const radarDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.02, 8), shipGreyMat);
radarDisc.name = 'radarDisc';
radarDisc.rotation.x = Math.PI / 2;
radarDisc.position.set(-0.30, 2.48, 0);
shipGroup.add(radarDisc);

// ── Stern winch / CTD deployment system ───────────────────────────────────
// Drum
const winchDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.18, 6), shipGreyMat);
winchDrum.name = 'winchDrum';
winchDrum.rotation.x = Math.PI / 2;
winchDrum.position.set(1.30, 0.38, 0);
shipGroup.add(winchDrum);
// Flanges
[-1, 1].forEach((side, wi) => {
  const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.025, 6), shipGreyMat);
  fl.name = 'winchFlange_' + wi;
  fl.rotation.x = Math.PI / 2;
  fl.position.set(1.30, 0.38, side * 0.10);
  shipGroup.add(fl);
});
// Base block
const winchBase = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.26), shipDarkMat);
winchBase.name = 'winchBase';
winchBase.position.set(1.30, 0.29, 0);
shipGroup.add(winchBase);

// CTD wire — from winch drum up to mast yardarm
const wireMat = new THREE.LineBasicMaterial({ color: 0x9aabaf });
const wireGeo = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(1.30, 0.42, 0),
  new THREE.Vector3(-0.30, 2.05, 0)
]);
const ctdWire = new THREE.Line(wireGeo, wireMat);
ctdWire.name = 'ctdWire';
shipGroup.add(ctdWire);

// Stay wires from masthead to bow and stern
[new THREE.Vector3(1.55, 0.28, 0), new THREE.Vector3(-1.80, 0.28, 0)].forEach((end, si) => {
  const stayGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.30, 2.22, 0), end
  ]);
  const stay = new THREE.Line(stayGeo, wireMat);
  stay.name = 'stayWire_' + si;
  shipGroup.add(stay);
});

// ── Navigation lights (emissive spheres) ──────────────────────────────────
const navRed = new THREE.Mesh(new THREE.SphereGeometry(0.038, 5, 4),
  new THREE.MeshStandardMaterial({ color: 0xff1800, emissive: 0xff1800, emissiveIntensity: 2.8 }));
navRed.name = 'navLightRed';
navRed.position.set(1.55, 0.36, -0.56);
shipGroup.add(navRed);

const navGreen = new THREE.Mesh(new THREE.SphereGeometry(0.038, 5, 4),
  new THREE.MeshStandardMaterial({ color: 0x00ee44, emissive: 0x00ee44, emissiveIntensity: 2.8 }));
navGreen.name = 'navLightGreen';
navGreen.position.set(1.55, 0.36, 0.56);
shipGroup.add(navGreen);

// Masthead light
const mastheadLight = new THREE.Mesh(new THREE.SphereGeometry(0.032, 5, 4),
  new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 3.2 }));
mastheadLight.name = 'mastheadLight';
mastheadLight.position.set(-0.30, 2.26, 0);
shipGroup.add(mastheadLight);

// Anchor light (stern white)
const sternLight = new THREE.Mesh(new THREE.SphereGeometry(0.028, 5, 4),
  new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffeedd, emissiveIntensity: 2.0 }));
sternLight.name = 'sternLight';
sternLight.position.set(-1.88, 0.50, 0);
shipGroup.add(sternLight);

// ─── ROV Submarine ────────────────────────────────────────────────────────────
const rovGroup = new THREE.Group();
rovGroup.name = 'rovGroup';
rovGroup.position.set(1.30, -1.8, 0); // x aligned with bow winch (ship-local x=1.30)
scene.add(rovGroup);

// Shared helper — same pattern as buildShipPart
function buildROVPart(vFlat, faces, mat) {
  const geo = new THREE.BufferGeometry();
  const pos = [], nrm = [];
  for (let i = 0; i < faces.length; i += 3) {
    const ia = faces[i]*3, ib = faces[i+1]*3, ic = faces[i+2]*3;
    const ax=vFlat[ia],ay=vFlat[ia+1],az=vFlat[ia+2];
    const bx=vFlat[ib],by=vFlat[ib+1],bz=vFlat[ib+2];
    const cx=vFlat[ic],cy=vFlat[ic+1],cz=vFlat[ic+2];
    const ux=bx-ax,uy=by-ay,uz=bz-az;
    const vx=cx-ax,vy=cy-ay,vz=cz-az;
    const nx=uy*vz-uz*vy, ny=uz*vx-ux*vz, nz=ux*vy-uy*vx;
    const ln=Math.sqrt(nx*nx+ny*ny+nz*nz)||1;
    for (let k=0;k<3;k++){
      pos.push([ax,bx,cx][k],[ay,by,cy][k],[az,bz,cz][k]);
      nrm.push(nx/ln,ny/ln,nz/ln);
    }
  }
  geo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(pos),3));
  geo.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(nrm),3));
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  return m;
}

// ── Materials ─────────────────────────────────────────────────────────────────
const rovYellow  = new THREE.MeshStandardMaterial({ color: 0xffc200, roughness: 0.55, metalness: 0.25, flatShading: true });
const rovDark    = new THREE.MeshStandardMaterial({ color: 0x1c2530, roughness: 0.7,  metalness: 0.4,  flatShading: true });
const rovGrey    = new THREE.MeshStandardMaterial({ color: 0x4a5a6a, roughness: 0.6,  metalness: 0.5,  flatShading: true });
const rovBlack   = new THREE.MeshStandardMaterial({ color: 0x0d0f12, roughness: 0.8,  metalness: 0.3,  flatShading: true });
const rovOrange  = new THREE.MeshStandardMaterial({ color: 0xff5500, roughness: 0.5,  metalness: 0.2,  flatShading: true });

// ── Main chassis — tapered 8-vertex prism, nose narrows toward -X ─────────────
// Vertices: stern face (x=+0.30) is wide, bow face (x=-0.30) is narrower
const rovBodyVerts = [
  // stern face — wider (x=+0.30)
  -0.30,  0.13,  0.17,   // 0 top-port
  -0.30,  0.13, -0.17,   // 1 top-stbd
  -0.30, -0.10, -0.20,   // 2 bot-stbd
  -0.30, -0.10,  0.20,   // 3 bot-port
  // bow face — slightly narrower (x=-0.30)
   0.30,  0.13,  0.14,   // 4 top-port
   0.30,  0.13, -0.14,   // 5 top-stbd
   0.30, -0.08, -0.16,   // 6 bot-stbd
   0.30, -0.08,  0.16,   // 7 bot-port
];
const rovBodyFaces = [
  0,1,2, 0,2,3,       // stern face
  4,6,5, 4,7,6,       // bow face
  0,4,5, 0,5,1,       // top face
  3,2,6, 3,6,7,       // bottom face
  0,3,7, 0,7,4,       // port side
  1,5,6, 1,6,2,       // stbd side
];
const rovBodyMesh = buildROVPart(rovBodyVerts, rovBodyFaces, rovYellow);
rovBodyMesh.name = 'rovBody';
rovGroup.add(rovBodyMesh);

// ── Top equipment frame — flat hexagonal slab sitting on top of chassis ───────
const rovFrameVerts = [
  -0.26,  0.14, -0.12,  // 0
  -0.26,  0.14,  0.12,  // 1
   0.10,  0.14,  0.15,  // 2
   0.26,  0.14,  0.08,  // 3
   0.26,  0.14, -0.08,  // 4
   0.10,  0.14, -0.15,  // 5
  -0.26,  0.21, -0.12,  // 6
  -0.26,  0.21,  0.12,  // 7
   0.10,  0.21,  0.15,  // 8
   0.26,  0.21,  0.08,  // 9
   0.26,  0.21, -0.08,  // 10
   0.10,  0.21, -0.15,  // 11
];
const rovFrameFaces = [
  6,7,8,  6,8,9,  6,9,10,  6,10,11,   // top
  0,2,1,  0,3,2,  0,4,3,   0,5,4,     // bottom
  0,1,7,  0,7,6,   1,2,8,  1,8,7,
  2,3,9,  2,9,8,   3,4,10, 3,10,9,
  4,5,11, 4,11,10, 5,0,6,  5,6,11,
];
const rovFrame = buildROVPart(rovFrameVerts, rovFrameFaces, rovDark);
rovFrame.name = 'rovFrame';
rovGroup.add(rovFrame);

// ── Instrument pod on top frame — small angled block ─────────────────────────
const rovPodVerts = [
  -0.18,  0.21, -0.07,  // 0
  -0.18,  0.21,  0.07,  // 1
   0.04,  0.21,  0.09,  // 2
   0.04,  0.21, -0.09,  // 3
  -0.14,  0.28, -0.06,  // 4
  -0.14,  0.28,  0.06,  // 5
   0.02,  0.28,  0.07,  // 6
   0.02,  0.28, -0.07,  // 7
];
const rovPodFaces = [
  4,5,6, 4,6,7,         // top
  0,3,2, 0,2,1,         // bottom
  0,1,5, 0,5,4,  1,2,6, 1,6,5,
  2,3,7, 2,7,6,  3,0,4, 3,4,7,
];
const rovPod = buildROVPart(rovPodVerts, rovPodFaces, rovGrey);
rovPod.name = 'rovPod';
rovGroup.add(rovPod);

// ── Nose section — tapered snout with darker face plate ───────────────────────
const rovNoseVerts = [
  -0.30,  0.13,  0.17,  // 0
  -0.30,  0.13, -0.17,  // 1
  -0.30, -0.10, -0.20,  // 2
  -0.30, -0.10,  0.20,  // 3
  -0.42,  0.09,  0.12,  // 4 nose top-port
  -0.42,  0.09, -0.12,  // 5 nose top-stbd
  -0.42, -0.07, -0.13,  // 6 nose bot-stbd
  -0.42, -0.07,  0.13,  // 7 nose bot-port
];
const rovNoseFaces = [
  4,5,6, 4,6,7,         // nose face plate
  0,4,7, 0,7,3,         // port cheek
  1,5,4, 1,4,0,         // stbd cheek (wrong winding fixed)
  3,7,6, 3,6,2,         // bottom chin
  0,1,5, 0,5,4,         // top brow — was missing
];
const rovNose = buildROVPart(rovNoseVerts, rovNoseFaces, rovDark);
rovNose.name = 'rovNose';
rovGroup.add(rovNose);

// Bright nose-face plate (emissive) — just the flat front quad
const rovFacePlateVerts = [
  -0.421,  0.09,  0.12,
  -0.421,  0.09, -0.12,
  -0.421, -0.07, -0.13,
  -0.421, -0.07,  0.13,
];
const rovFacePlateFaces = [0,1,2, 0,2,3];
const rovFacePlate = buildROVPart(rovFacePlateVerts, rovFacePlateFaces,
  new THREE.MeshStandardMaterial({ color: 0x111820, roughness: 0.9, flatShading: true }));
rovFacePlate.name = 'rovFacePlate';
rovGroup.add(rovFacePlate);

// ── Headlights — two emissive lens discs flanking centre ──────────────────────
[0.055, -0.055].forEach((zOff, li) => {
  const lens = new THREE.Mesh(
    new THREE.CylinderGeometry(0.038, 0.038, 0.015, 6),
    new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4cc, emissiveIntensity: 3.5, flatShading: true })
  );
  lens.name = 'rovHeadlight_' + li;
  lens.rotation.z = Math.PI / 2;
  lens.position.set(-0.432, 0.01, zOff);
  rovGroup.add(lens);
});

// Central main lamp (replaces old rovLight — keeps same name for spotlight anchor)
const rovLight = new THREE.Mesh(
  new THREE.CylinderGeometry(0.028, 0.028, 0.015, 6),
  new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 4.5, flatShading: true })
);
rovLight.name = 'rovLight';
rovLight.rotation.z = Math.PI / 2;
rovLight.position.set(-0.432, 0.01, 0);
rovGroup.add(rovLight);

// ── Horizontal thrusters — 4-sided shrouded pods port+stbd ────────────────────
[-1, 1].forEach((side, ti) => {
  // Shroud ring — flat 6-sided torus-like prism
  const shV = [];
  const shF = [];
  const SEGS = 6, oR = 0.095, iR = 0.060, thH = 0.11;
  for (let s = 0; s < SEGS; s++) {
    const a = (s / SEGS) * Math.PI * 2;
    shV.push(Math.cos(a)*oR, -thH/2, Math.sin(a)*oR);  // outer bottom ring  s*2
    shV.push(Math.cos(a)*oR,  thH/2, Math.sin(a)*oR);  // outer top ring     s*2+1
  }
  for (let s = 0; s < SEGS; s++) {
    const a = s, b = (s+1)%SEGS;
    shF.push(a*2, b*2, b*2+1,  a*2, b*2+1, a*2+1);
  }
  const shroud = buildROVPart(shV, shF, rovBlack);
  shroud.name = 'rovShroud_' + ti;
  shroud.rotation.x = Math.PI / 2;
  shroud.position.set(0.10, -0.02, side * 0.30);
  rovGroup.add(shroud);

  // Prop hub — tiny 4-sided disc inside shroud
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.045, 4), rovGrey);
  hub.name = 'rovPropHub_' + ti;
  hub.position.set(0.10, -0.02, side * 0.30);
  rovGroup.add(hub);

  // Strut connecting chassis to shroud
  const strutV = [
     0.06, -0.10, side*0.195,   0.06, -0.10, side*0.205,
     0.14, -0.10, side*0.195,   0.14, -0.10, side*0.205,
     0.06,  0.00, side*0.195,   0.06,  0.00, side*0.205,
     0.14,  0.00, side*0.195,   0.14,  0.00, side*0.205,
  ];
  const strutF = [0,2,3,0,3,1, 4,5,7,4,7,6, 0,1,5,0,5,4, 2,6,7,2,7,3, 0,4,6,0,6,2, 1,3,7,1,7,5];
  const strut = buildROVPart(strutV, strutF, rovDark);
  strut.name = 'rovStrut_' + ti;
  rovGroup.add(strut);
});

// ── Vertical thruster — top-mounted, 6-sided shroud ───────────────────────────
const vtShV = [];
const vtShF = [];
const VT_SEGS = 6, VT_OR = 0.085, VT_H = 0.10;
for (let s = 0; s < VT_SEGS; s++) {
  const a = (s / VT_SEGS) * Math.PI * 2;
  vtShV.push(Math.cos(a)*VT_OR, 0, Math.sin(a)*VT_OR);           // bottom s
  vtShV.push(Math.cos(a)*VT_OR, VT_H, Math.sin(a)*VT_OR);        // top    s+VT_SEGS
}
for (let s = 0; s < VT_SEGS; s++) {
  const a = s, b = (s+1)%VT_SEGS;
  vtShF.push(a, b+VT_SEGS, b,   a, a+VT_SEGS, b+VT_SEGS);
}
const vtShroud = buildROVPart(vtShV, vtShF, rovBlack);
vtShroud.name = 'rovVThrusterShroud';
vtShroud.position.set(0.06, 0.21, 0);
rovGroup.add(vtShroud);

// ── Sample basket — low-poly open cage on the bottom ─────────────────────────
const BSIDES = 8, BRAD = 0.18, BDEP = 0.09;
for (let s = 0; s < BSIDES; s++) {
  const a0 = (s / BSIDES) * Math.PI * 2;
  const a1 = ((s+1) / BSIDES) * Math.PI * 2;
  const barV = [
    Math.cos(a0)*BRAD, -0.10, Math.sin(a0)*BRAD,
    Math.cos(a0)*BRAD, -0.10-BDEP, Math.sin(a0)*BRAD,
    Math.cos(a1)*BRAD, -0.10, Math.sin(a1)*BRAD,
    Math.cos(a1)*BRAD, -0.10-BDEP, Math.sin(a1)*BRAD,
  ];
  const barF = [0,2,3, 0,3,1];
  const bar = buildROVPart(barV, barF, rovDark);
  bar.name = 'rovBasketBar_' + s;
  bar.position.set(-0.04, 0, 0);
  rovGroup.add(bar);
}
// Basket base ring
const basketRing = new THREE.Mesh(
  new THREE.TorusGeometry(BRAD, 0.012, 4, BSIDES),
  rovDark
);
basketRing.name = 'rovBasketRing';
basketRing.rotation.x = Math.PI / 2;
basketRing.position.set(-0.04, -0.193, 0);
rovGroup.add(basketRing);





// ── Antenna / transponder mast — thin swept prism on top ──────────────────────
const antV = [
  -0.10, 0.28, -0.015,  -0.10, 0.28,  0.015,
  -0.12, 0.46, -0.008,  -0.12, 0.46,  0.008,
  -0.08, 0.28, -0.015,  -0.08, 0.28,  0.015,
  -0.10, 0.46, -0.008,  -0.10, 0.46,  0.008,
];
const antF = [0,2,3,0,3,1, 4,5,7,4,7,6, 0,1,5,0,5,4, 2,6,7,2,7,3, 0,4,6,0,6,2, 1,3,7,1,7,5];
const antenna = buildROVPart(antV, antF, rovGrey);
antenna.name = 'rovAntenna';
rovGroup.add(antenna);

// Transponder beacon — tiny emissive sphere atop antenna
const rovBeacon = new THREE.Mesh(
  new THREE.SphereGeometry(0.022, 5, 4),
  new THREE.MeshStandardMaterial({ color: 0xff4400, emissive: 0xff2200, emissiveIntensity: 3.0, flatShading: true })
);
rovBeacon.name = 'rovBeacon';
rovBeacon.position.set(-0.12, 0.485, 0);
rovGroup.add(rovBeacon);

// Cache frequently-accessed ROV child refs so animate() never calls getObjectByName every frame
const _rovPropHub0   = rovGroup.getObjectByName('rovPropHub_0');
const _rovPropHub1   = rovGroup.getObjectByName('rovPropHub_1');
const _rovBeaconMesh = rovGroup.getObjectByName('rovBeacon');
const _rovVTShroud   = rovGroup.getObjectByName('rovVThrusterShroud');

const rovSpotlight = new THREE.PointLight(0xaaddff, 2, 3);
rovSpotlight.name = 'rovSpotlight';
// added to rovLookPivot below, after pivot is created

// Torch cone — two representations:
//   torchConeSegments = disc rings (shown in orbit cam, hidden in ROV cam)
//   torchConeROV      = solid BackSide cone (shown in ROV cam, hidden in orbit cam)
const CONE_RINGS = 12;
const CONE_LENGTH = 3.5;
const torchConeSegments = [];

// Disc-ring array for orbit cam view
for (let r = 0; r < CONE_RINGS; r++) {
  const t0 = r / CONE_RINGS;
  const t1 = (r + 1) / CONE_RINGS;
  const rInner = t0 * 1.1;
  const rOuter = t1 * 1.1;
  const zPos   = -(0.32 + t0 * CONE_LENGTH);
  const ringGeo = new THREE.CylinderGeometry(rOuter, rInner, 0.001, 20, 1, false);
  const alpha = (1 - t0) * (1 - t0) * 0.22;
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xaaddff, transparent: true, opacity: 0.0,
    side: THREE.DoubleSide, depthWrite: false
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.name = 'torchRing_' + r;
  ring.rotation.z = Math.PI / 2;
  ring.position.set(zPos, 0, 0);
  ring._baseAlpha = alpha;
  torchConeSegments.push(ring);
}

// ROV cam torch: a billboard sprite placed ahead of the camera.
// Sprites always face the camera so they can never appear edge-on.
const rovTorchCanvas = document.createElement('canvas');
rovTorchCanvas.width  = 256;
rovTorchCanvas.height = 256;
const rovTorchCtx = rovTorchCanvas.getContext('2d');

// Draw a soft radial glow: bright white core fading to transparent blue edge
const rovTorchGrad = rovTorchCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
rovTorchGrad.addColorStop(0.00, 'rgba(255,255,255,0.95)');
rovTorchGrad.addColorStop(0.12, 'rgba(210,235,255,0.80)');
rovTorchGrad.addColorStop(0.35, 'rgba(140,200,255,0.45)');
rovTorchGrad.addColorStop(0.65, 'rgba(80,150,255,0.15)');
rovTorchGrad.addColorStop(1.00, 'rgba(40,100,220,0.00)');
rovTorchCtx.fillStyle = rovTorchGrad;
rovTorchCtx.fillRect(0, 0, 256, 256);

const rovTorchTex = new THREE.CanvasTexture(rovTorchCanvas);
const rovSpriteMat = new THREE.SpriteMaterial({
  map: rovTorchTex,
  transparent: true,
  opacity: 0.0,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
const torchConeROV = new THREE.Sprite(rovSpriteMat);
torchConeROV.name = 'torchConeROV';
torchConeROV.scale.set(2.8, 2.8, 1);
torchConeROV.position.set(-2.1, 0, 0);   // ~1.8 units ahead of emitter
torchConeROV.visible = false;

// Second, larger sprite for the soft outer bloom halo
const rovHaloCanvas = document.createElement('canvas');
rovHaloCanvas.width  = 256;
rovHaloCanvas.height = 256;
const rovHaloCtx = rovHaloCanvas.getContext('2d');
const rovHaloGrad = rovHaloCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
rovHaloGrad.addColorStop(0.00, 'rgba(180,220,255,0.30)');
rovHaloGrad.addColorStop(0.40, 'rgba(100,170,255,0.12)');
rovHaloGrad.addColorStop(1.00, 'rgba(60,120,255,0.00)');
rovHaloCtx.fillStyle = rovHaloGrad;
rovHaloCtx.fillRect(0, 0, 256, 256);
const rovHaloTex = new THREE.CanvasTexture(rovHaloCanvas);
const rovHaloSpriteMat = new THREE.SpriteMaterial({
  map: rovHaloTex,
  transparent: true,
  opacity: 0.0,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
const torchHaloRing = new THREE.Sprite(rovHaloSpriteMat);
torchHaloRing.name = 'torchHaloRing';
torchHaloRing.scale.set(5.5, 5.5, 1);
torchHaloRing.position.set(-2.1, 0, 0);
torchHaloRing.visible = false;

// Convenience aliases so the rest of the code that references rovConeMat / rovHaloRingMat still works
const rovConeMat     = rovSpriteMat;
const rovHaloRingMat = rovHaloSpriteMat;

// ─── Torch Motes (volumetric particles inside cone beam) ─────────────────────
const MOTE_COUNT = 80;
const moteGeo = new THREE.BufferGeometry();
const motePos = new Float32Array(MOTE_COUNT * 3);
const moteVel = new Float32Array(MOTE_COUNT * 3);
const motePhase = new Float32Array(MOTE_COUNT);

// Initialise motes spread within a cone frustum along -X axis
function resetMote(i) {
  // Random distance along beam (t = 0 near ROV, 1 far end)
  const t = Math.random();
  const coneR = t * 1.1; // matches cone ring radius profile
  const angle = Math.random() * Math.PI * 2;
  const r = Math.random() * coneR * 0.85;
  motePos[i * 3]     = -(0.32 + t * CONE_LENGTH);
  motePos[i * 3 + 1] = Math.sin(angle) * r;
  motePos[i * 3 + 2] = Math.cos(angle) * r;
  moteVel[i * 3]     = (Math.random() - 0.5) * 0.0012;
  moteVel[i * 3 + 1] = (Math.random() - 0.5) * 0.0010;
  moteVel[i * 3 + 2] = (Math.random() - 0.5) * 0.0010;
  motePhase[i]       = Math.random() * Math.PI * 2;
}
for (let i = 0; i < MOTE_COUNT; i++) resetMote(i);
moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
const moteMat = new THREE.PointsMaterial({
  color: 0xd0eeff, size: 0.045, transparent: true,
  opacity: 0.0, sizeAttenuation: true, depthWrite: false
});
const moteMesh = new THREE.Points(moteGeo, moteMat);
moteMesh.name = 'torchMotes';
moteMesh.frustumCulled = false;

// Halo disc flush at emitter face
const torchHaloGeo = new THREE.CircleGeometry(0.38, 24);
const torchHaloMat = new THREE.MeshBasicMaterial({
  color: 0xffffff, transparent: true, opacity: 0.0,
  side: THREE.DoubleSide, depthWrite: false
});
const torchHalo = new THREE.Mesh(torchHaloGeo, torchHaloMat);
torchHalo.name = 'torchHalo';
torchHalo.rotation.y = Math.PI / 2;
torchHalo.position.set(-0.30, 0, 0);

// (beam payload — rings, ROV cone, motes, halo — attached to rovLookPivot below)

// Tether (rope from ship arm to ROV)
const tetherMat = new THREE.LineBasicMaterial({ color: 0xcccccc, linewidth: 2 });
let tetherGeo = new THREE.BufferGeometry();
const tetherPts = new Float32Array(3 * 20);
tetherGeo.setAttribute('position', new THREE.BufferAttribute(tetherPts, 3));
const tether = new THREE.Line(tetherGeo, tetherMat);
tether.name = 'tether';
tether.frustumCulled = false;
scene.add(tether);

function updateTether() {
  const start = new THREE.Vector3(1.30 + shipGroup.position.x, shipGroup.position.y + 0.42, shipGroup.position.z);
  const end = rovGroup.position.clone();
  const pts = tetherGeo.attributes.position.array;
  for (let i = 0; i < 20; i++) {
    const t = i / 19;
    const sag = Math.sin(t * Math.PI) * 0.3;
    pts[i * 3] = start.x + (end.x - start.x) * t;
    pts[i * 3 + 1] = start.y + (end.y - start.y) * t - sag;
    pts[i * 3 + 2] = start.z + (end.z - start.z) * t;
  }
  tetherGeo.attributes.position.needsUpdate = true;
}

// ─── ROV WASD / Arrow-key Manual Control ─────────────────────────────────────
const rovKeys = { w: false, a: false, s: false, d: false, up: false, down: false, left: false, right: false };

window.addEventListener('keydown', (e) => {
  if (!rovCamActive) return;
  switch (e.code) {
    case 'KeyW':    case 'ArrowUp':    rovKeys.w    = rovKeys.up    = true; e.preventDefault(); break;
    case 'KeyS':    case 'ArrowDown':  rovKeys.s    = rovKeys.down  = true; e.preventDefault(); break;
    case 'KeyA':    case 'ArrowLeft':  rovKeys.a    = rovKeys.left  = true; e.preventDefault(); break;
    case 'KeyD':    case 'ArrowRight': rovKeys.d    = rovKeys.right = true; e.preventDefault(); break;
  }
});
window.addEventListener('keyup', (e) => {
  switch (e.code) {
    case 'KeyW':    case 'ArrowUp':    rovKeys.w    = rovKeys.up    = false; break;
    case 'KeyS':    case 'ArrowDown':  rovKeys.s    = rovKeys.down  = false; break;
    case 'KeyA':    case 'ArrowLeft':  rovKeys.a    = rovKeys.left  = false; break;
    case 'KeyD':    case 'ArrowRight': rovKeys.d    = rovKeys.right = false; break;
  }
});

// ─── ROV Mouse-look (drag to pan) ────────────────────────────────────────────
let rovDragging = false;
let rovDragLast = { x: 0, y: 0 };

renderer.domElement.addEventListener('mousedown', (e) => {
  if (!rovCamActive) return;
  if (e.button !== 0) return;
  rovDragging = true;
  rovDragLast.x = e.clientX;
  rovDragLast.y = e.clientY;
  renderer.domElement.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
  if (!rovDragging || !rovCamActive) return;
  const dx = e.clientX - rovDragLast.x;
  const dy = e.clientY - rovDragLast.y;
  rovDragLast.x = e.clientX;
  rovDragLast.y = e.clientY;
  rovLook.yaw -= dx * ROV_PAN_SPEED;
  // pitch is locked — vertical drag intentionally ignored
});

window.addEventListener('mouseup', (e) => {
  if (e.button !== 0) return;
  rovDragging = false;
  if (rovCamActive) renderer.domElement.style.cursor = 'grab';
});

// Double-click resets look direction to forward
renderer.domElement.addEventListener('dblclick', () => {
  if (!rovCamActive) return;
  rovLook.yaw   = 0;
  rovLook.pitch = 0;
});

const ROV_MOVE_SPEED = 0.045;
const ROV_X_LIMIT    = CUBE_W / 2 - 0.4;
const ROV_Z_LIMIT    = CUBE_D / 2 - 0.4;

function applyROVInput() {
  if (!rovCamActive) return;
  if (rovKeys.w    || rovKeys.up)    { rovDestY = rovTargetY = Math.min(0,              rovTargetY + ROV_MOVE_SPEED); }
  if (rovKeys.s    || rovKeys.down)  { rovDestY = rovTargetY = Math.max(-TOTAL_H + 0.4, rovTargetY - ROV_MOVE_SPEED); }
  if (rovKeys.a    || rovKeys.left)  { rovGroup.position.z = Math.max(-ROV_Z_LIMIT, rovGroup.position.z - ROV_MOVE_SPEED); }
  if (rovKeys.d    || rovKeys.right) { rovGroup.position.z = Math.min( ROV_Z_LIMIT, rovGroup.position.z + ROV_MOVE_SPEED); }
}

// ─── ROV Camera ───────────────────────────────────────────────────────────────
const rovCamera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.05, 500);
rovCamera.name = 'rovCamera';
rovCamera.position.set(-0.35, 0.04, 0);
rovCamera.near = 0.35;
rovCamera.updateProjectionMatrix();
rovGroup.add(rovCamera);

// ROV look pivot — yaw/pitch applied here so ROV body stays level
const rovLookPivot = new THREE.Object3D();
rovLookPivot.name = 'rovLookPivot';
rovLookPivot.rotation.y = 0; // default: facing forward (-Z)
rovGroup.add(rovLookPivot);
rovLookPivot.add(rovCamera);

// Beam payload lives on the pivot so it sweeps with camera look
rovLookPivot.add(rovSpotlight);
torchConeSegments.forEach(ring => rovLookPivot.add(ring));
rovLookPivot.add(torchConeROV);
rovLookPivot.add(torchHaloRing);
rovLookPivot.add(moteMesh);
rovLookPivot.add(torchHalo);

// ROV pan state
const rovLook = { yaw: 0, pitch: 0 };
const ROV_PAN_SPEED   = 0.0022;
const ROV_PITCH_LIMIT = 0; // pitch locked — yaw only to prevent disorienting flips
let rovPointerLocked = false;

let activeCamera = camera;
let rovCamActive = false;

// ─── Zone Selection & ROV Animation ──────────────────────────────────────────
let selectedZone = null;
let rovTargetY = -1.8;
let rovDestY = -1.8;        // final destination; rovTargetY lerps toward this
let rovCurrentY = rovGroup.position.y;
let targetControlsY = controls.target.y;

const ROV_CRUISE_SPEED     = 0.08;  // minimum cruise speed (near destination)
const ROV_CRUISE_SPEED_MAX = 0.55;  // maximum cruise speed (full cross-ocean trip)

// ─── ROV Wake Particles ───────────────────────────────────────────────────────
const WAKE_COUNT = 45;
const wakeGeo = new THREE.BufferGeometry();
const wakePos = new Float32Array(WAKE_COUNT * 3);
const wakeVel = new Float32Array(WAKE_COUNT * 3);
const wakeAge = new Float32Array(WAKE_COUNT);
const wakeLife = new Float32Array(WAKE_COUNT);
for (let i = 0; i < WAKE_COUNT; i++) {
  wakeAge[i] = 999; // start dead
  wakeLife[i] = 0.4 + Math.random() * 0.5;
}
wakeGeo.setAttribute('position', new THREE.BufferAttribute(wakePos, 3));
const wakeMat = new THREE.PointsMaterial({
  color: 0x88ccff, size: 0.055, transparent: true,
  opacity: 0.0, sizeAttenuation: true, depthWrite: false
});
const wakeMesh = new THREE.Points(wakeGeo, wakeMat);
wakeMesh.name = 'rovWake';
wakeMesh.frustumCulled = false;
scene.add(wakeMesh);

let rovCruising = false; // true while ROV is actively moving toward destination

// Torch / darkness state
let torchActive = false;
let torchBlend  = 0.0; // 0 = surface, 1 = deep dark

function selectZone(zoneId) {
  const z = zones[zoneId];
  selectedZone = zoneId;
  rovDestY = z.y;

  // Only update orbit controls target when NOT in ROV cam — in ROV cam mode
  // writing controls.target triggers an OrbitControls recalculation that flips
  // the camera even though controls.enabled is false.
  if (!rovCamActive) {
    targetControlsY = z.y;
  }

  showInfoPanel(z);
  updateNavPips();

  // Highlight selected zone box, dim others
  zoneBoxes.forEach((box, i) => {
    if (i === zoneId) {
      box.material.opacity = 0.97;
      box.material.emissiveIntensity = 1.2;
      box.material.color.set(new THREE.Color(z.color).multiplyScalar(1.5));
    } else {
      box.material.opacity = 0.72;
      box.material.emissiveIntensity = 0.3;
      box.material.color.set(zones[i].color);
    }
  });
}

function deselectAll() {
  selectedZone = null;
  hideInfoPanel();
  updateNavPips();
  zoneBoxes.forEach((box, i) => {
    box.material.opacity = 0.90;
    box.material.emissiveIntensity = 0.5;
    box.material.color.set(zones[i].color);
  });
}

// ─── Info Panel (HTML Overlay) ────────────────────────────────────────────────
const panel = document.createElement('div');
panel.id = 'infoPanel';
panel.style.cssText = `
  position:fixed; top:50%; right:24px; transform:translateY(-50%);
  width:280px; max-height:72vh; overflow-y:auto;
  background:rgba(5,12,28,0.92);
  border:1px solid rgba(0,140,255,0.35);
  border-radius:10px; padding:22px 20px 18px;
  color:#c8e8ff; font-family:Inter,sans-serif;
  box-sizing:border-box; display:none;
  backdrop-filter:blur(12px);
  z-index:300;
  scrollbar-width:thin; scrollbar-color:rgba(0,140,255,0.4) transparent;
`;
document.body.appendChild(panel);

const closeBtn = document.createElement('button');
closeBtn.textContent = '✕';
closeBtn.style.cssText = `
  position:absolute; top:12px; right:14px;
  background:none; border:none; color:#88aacc; font-size:16px;
  cursor:pointer; padding:2px 6px; border-radius:4px;
  font-family:Inter,sans-serif;
`;
closeBtn.addEventListener('click', deselectAll);
panel.appendChild(closeBtn);

const panelTitle = document.createElement('div');
panelTitle.style.cssText = 'font-size:14px;font-weight:700;color:#00ccff;margin-bottom:4px;line-height:1.3;padding-right:20px;';
panel.appendChild(panelTitle);

const panelDepth = document.createElement('div');
panelDepth.style.cssText = 'font-size:11px;color:#4488aa;margin-bottom:12px;letter-spacing:0.05em;text-transform:uppercase;';
panel.appendChild(panelDepth);

const panelDesc = document.createElement('div');
panelDesc.style.cssText = 'font-size:12px;line-height:1.7;color:#aaccdd;margin-bottom:14px;';
panel.appendChild(panelDesc);

const panelCreatureTitle = document.createElement('div');
panelCreatureTitle.textContent = 'ACTIVE ENTITIES';
panelCreatureTitle.style.cssText = 'font-size:10px;letter-spacing:0.12em;color:#4488aa;margin-bottom:8px;font-weight:600;';
panel.appendChild(panelCreatureTitle);

const panelCreatures = document.createElement('div');
panelCreatures.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;';
panel.appendChild(panelCreatures);

function showInfoPanel(z) {
  panelTitle.textContent = z.title;
  panelDepth.textContent = z.depth;
  panelDesc.textContent = z.desc;
  panelCreatures.innerHTML = '';
  z.creatures.forEach(c => {
    const tag = document.createElement('span');
    tag.textContent = c;
    tag.style.cssText = `
      background:rgba(0,80,160,0.4);
      border:1px solid rgba(0,140,255,0.3);
      border-radius:20px; padding:3px 10px;
      font-size:11px; color:#88ccff;
      font-family:Inter,sans-serif;
    `;
    panelCreatures.appendChild(tag);
  });
  panel.style.display = 'block';
}

function hideInfoPanel() {
  panel.style.display = 'none';
}

// ─── Hint UI ──────────────────────────────────────────────────────────────────
const hintBar = document.createElement('div');
hintBar.id = 'hintBar';
hintBar.style.cssText = `
  position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:20px; padding:6px 8px 6px 18px; color:#88aacc;
  font-family:Inter,sans-serif; font-size:12px;
  pointer-events:auto; z-index:300; white-space:nowrap;
  backdrop-filter:blur(8px);
  display:flex; align-items:center; gap:12px;
`;
document.body.appendChild(hintBar);

const hintText = document.createElement('span');
hintText.innerHTML = '🖱️ <b>Click a zone</b> to explore &nbsp;|&nbsp; Drag to orbit &nbsp;|&nbsp; Scroll to zoom';
hintText.style.pointerEvents = 'none';
hintBar.appendChild(hintText);

// Divider
const hintDivider = document.createElement('span');
hintDivider.textContent = '|';
hintDivider.style.cssText = 'color:rgba(0,140,255,0.35); pointer-events:none;';
hintBar.appendChild(hintDivider);

// ROV cam toggle pill
const rovCamBtn = document.createElement('button');
rovCamBtn.textContent = '📷 ROV Cam';
rovCamBtn.style.cssText = `
  background:rgba(0,80,160,0.45); border:1px solid rgba(0,140,255,0.45);
  border-radius:14px; color:#88ccff; font-family:Inter,sans-serif;
  font-size:11px; font-weight:600; padding:4px 13px; cursor:pointer;
  transition:background 0.15s, color 0.15s, border-color 0.15s;
  letter-spacing:0.04em; white-space:nowrap;
`;
rovCamBtn.addEventListener('mouseenter', () => {
  if (!rovCamActive) { rovCamBtn.style.background = 'rgba(0,120,220,0.65)'; rovCamBtn.style.color = '#ffffff'; }
});
rovCamBtn.addEventListener('mouseleave', () => {
  if (!rovCamActive) { rovCamBtn.style.background = 'rgba(0,80,160,0.45)'; rovCamBtn.style.color = '#88ccff'; }
});
hintBar.appendChild(rovCamBtn);

// Night Vision overlay — only visible in orbit cam night vision mode
const nvOverlay = document.createElement('div');
nvOverlay.style.cssText = `
  position:fixed; inset:0; pointer-events:none; z-index:148;
  opacity:0; transition:opacity 0.6s ease;
  mix-blend-mode: normal;
`;
// Scanline canvas for NV effect
const nvCanvas = document.createElement('canvas');
nvCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0.08;';
nvOverlay.appendChild(nvCanvas);
function buildNVScanlines() {
  nvCanvas.width  = window.innerWidth;
  nvCanvas.height = window.innerHeight;
  const ctx = nvCanvas.getContext('2d');
  ctx.clearRect(0, 0, nvCanvas.width, nvCanvas.height);
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  for (let y = 0; y < nvCanvas.height; y += 3) {
    ctx.fillRect(0, y, nvCanvas.width, 1);
  }
}
buildNVScanlines();
window.addEventListener('resize', buildNVScanlines);
document.body.appendChild(nvOverlay);

// NV colour tint layer (green phosphor)
const nvTint = document.createElement('div');
nvTint.style.cssText = `
  position:fixed; inset:0; pointer-events:none; z-index:147;
  background:rgba(0,30,0,0.45);
  opacity:0; transition:opacity 0.6s ease;
`;
document.body.appendChild(nvTint);

// ─── Vignette Factory ─────────────────────────────────────────────────────────
// Builds a fixed-position wrapper (clips overflow) containing a 100vmax square
// inner div so the radial gradient is always measured from a true circle,
// regardless of window aspect ratio.
function makeVignette(gradient, zIndex, transition = 'opacity 0.5s ease') {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position:fixed; inset:0; pointer-events:none; z-index:${zIndex};
    overflow:hidden;
    opacity:0; transition:${transition};
  `;
  const inner = document.createElement('div');
  inner.style.cssText = `
    position:absolute;
    width:100vmax; height:100vmax;
    top:50%; left:50%; transform:translate(-50%,-50%);
    background: ${gradient};
    pointer-events:none;
  `;
  wrapper.appendChild(inner);
  document.body.appendChild(wrapper);
  return wrapper;
}

// NV vignette (tight circular mask — like looking through a tube)
const nvVignette  = makeVignette(NV_VIGNETTE_GRADIENT,  149, 'opacity 0.6s ease');

// NV badge
const nvBadge = document.createElement('div');
nvBadge.innerHTML = '🟢 NIGHT VISION';
nvBadge.style.cssText = `
  position:fixed; top:18px; right:20px;
  background:rgba(0,20,0,0.88); border:1px solid rgba(0,255,80,0.45);
  border-radius:8px; padding:5px 14px; color:#00ff55;
  font-family:Inter,sans-serif; font-size:11px; font-weight:700;
  letter-spacing:0.12em; z-index:300; pointer-events:none;
  opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,255,80,0.7);
`;
document.body.appendChild(nvBadge);

let nvActive = false;

// Cached scene lighting state for NV
const nvEmissiveCache = new Map(); // mesh → original emissiveIntensity

function setNVActive(on) {
  nvActive = on;
  nvOverlay.style.opacity  = on ? '1' : '0';
  nvTint.style.opacity     = on ? '1' : '0';
  setVignetteOpacity(nvVignette,  on ? 1 : 0);
  nvBadge.style.opacity    = on ? '1' : '0';
  nvBtn.textContent        = on ? '🌑 Night Vision: ON' : '🌑 Night Vision';
  nvBtn.style.background   = on ? 'rgba(0,100,20,0.65)'  : 'rgba(0,80,160,0.45)';
  nvBtn.style.borderColor  = on ? 'rgba(0,255,80,0.7)'   : 'rgba(0,140,255,0.45)';
  nvBtn.style.color        = on ? '#00ff55'               : '#88ccff';

  // Apply / remove sensor-green canvas filter for authentic NV geometry tint
  renderer.domElement.style.transition = 'filter 0.6s ease';
  renderer.domElement.style.filter = on
    ? NV_FILTER
    : 'none';

  if (on) {
    // Boost ambient so deep zones become visible
    ambientLight._nvPrevIntensity = ambientLight.intensity;
    ambientLight.intensity = Math.max(ambientLight.intensity, NV_AMBIENT_BOOST);
    // Boost emissive on every creature mesh to simulate phosphor glow
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material && obj.material.emissiveIntensity !== undefined) {
        if (!nvEmissiveCache.has(obj)) nvEmissiveCache.set(obj, obj.material.emissiveIntensity);
        obj.material.emissiveIntensity = (nvEmissiveCache.get(obj) || 0) + NV_EMISSIVE_BOOST;
      }
    });
  } else {
    // Restore
    if (ambientLight._nvPrevIntensity !== undefined) {
      ambientLight.intensity = ambientLight._nvPrevIntensity;
    }
    nvEmissiveCache.forEach((origVal, obj) => {
      if (obj.material) obj.material.emissiveIntensity = origVal;
    });
    nvEmissiveCache.clear();
  }
}

// ROV vignette (dark ocean-blue tunnel — only visible in ROV cam mode)
const rovVignette = makeVignette(ROV_VIGNETTE_GRADIENT, 150, 'opacity 0.5s ease');

// ROV cam active badge (top-centre)
const rovBadge = document.createElement('div');
rovBadge.textContent = '⬛ ROV CAM';
rovBadge.style.cssText = `
  position:fixed; top:18px; left:50%; transform:translateX(-50%);
  background:rgba(5,12,28,0.88); border:1px solid rgba(0,200,255,0.5);
  border-radius:8px; padding:5px 16px; color:#00ddff;
  font-family:Inter,sans-serif; font-size:11px; font-weight:700;
  letter-spacing:0.12em; z-index:300; pointer-events:none;
  opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,200,255,0.6);
`;
document.body.appendChild(rovBadge);

// WASD hint strip shown only in ROV cam mode
const rovControlHint = document.createElement('div');
rovControlHint.textContent = 'W/S · ↑/↓  Ascend / Descend     A/D · ←/→  Strafe';
rovControlHint.style.cssText = `
  position:fixed; top:52px; left:50%; transform:translateX(-50%);
  color:rgba(0,200,255,0.55); font-family:Inter,sans-serif;
  font-size:10px; letter-spacing:0.06em; z-index:300;
  pointer-events:none; opacity:0; transition:opacity 0.3s;
  text-shadow: 0 0 8px rgba(0,200,255,0.6);
`;
document.body.appendChild(rovControlHint);

function setVignetteOpacity(el, value) {
  el.style.opacity = String(value);
}

function setROVCamActive(active) {
  rovCamActive = active;
  activeCamera = active ? rovCamera : camera;
  controls.enabled = !active;
  controls.autoRotate = !active;  // pause auto-orbit during ROV cam

  // Hide tether, CTD wire, wave surface and zone wireframes in ROV cam
  tether.visible   = !active;
  ctdWire.visible  = !active;
  waveMesh.visible = !active;
  scene.children.forEach(obj => {
    if (obj.isLineSegments && obj.name && obj.name.startsWith('zoneedge_')) {
      obj.visible = !active;
    }
  });

  // Hide every visible part of the ROV in ROV cam so nothing clips into view
  rovGroup.traverse(child => {
    if (child.isMesh || child.isPoints || child.isLine || child.isSprite) {
      child.visible = !active;
    }
  });
  rovLight.visible = !active;

  // Reset look direction when entering or leaving ROV cam
  rovLook.yaw   = 0;
  rovLook.pitch = 0;
  rovLookPivot.rotation.set(0, 0, 0, 'YXZ');

  // Swap cone representations
  torchConeSegments.forEach(ring => { ring.visible = !active; });
  torchConeROV.visible = active;
  torchHaloRing.visible = active;

  if (active) {
    renderer.domElement.style.cursor = 'grab';
  } else {
    rovDragging = false;
    renderer.domElement.style.cursor = 'default';
  }

  // Button style
  rovCamBtn.textContent  = active ? '🌐 Orbit Cam' : '📷 ROV Cam';
  rovCamBtn.style.background   = active ? 'rgba(0,160,255,0.65)' : 'rgba(0,80,160,0.45)';
  rovCamBtn.style.borderColor  = active ? 'rgba(0,220,255,0.8)'  : 'rgba(0,140,255,0.45)';
  rovCamBtn.style.color        = active ? '#ffffff'              : '#88ccff';

  // Badge + control strip + vignette
  rovBadge.style.opacity        = active ? '1' : '0';
  rovControlHint.style.opacity  = active ? '1' : '0';
  setVignetteOpacity(rovVignette, active ? 1 : 0);

  hintText.innerHTML = active
    ? '🖱️ <b>Drag</b> to look around &nbsp;|&nbsp; W/S Ascend/Descend &nbsp;|&nbsp; A/D Strafe &nbsp;|&nbsp; Double-click resets view'
    : '🖱️ <b>Click a zone</b> to explore &nbsp;|&nbsp; Drag to orbit &nbsp;|&nbsp; Scroll to zoom';

  // Hide / show NV button based on camera mode (NV is ROV-cam only)
  if (active) {
    nvBtn.style.display = 'inline-block';
    requestAnimationFrame(() => { nvBtn.style.opacity = '1'; });
  } else {
    nvBtn.style.opacity = '0';
    setTimeout(() => { nvBtn.style.display = 'none'; }, 350);
  }
  nvBadge.style.opacity  = (active && nvActive) ? '1' : '0';

  // Clear held keys on toggle so no residual movement
  Object.keys(rovKeys).forEach(k => { rovKeys[k] = false; });
}

rovCamBtn.addEventListener('click', () => {
  setROVCamActive(!rovCamActive);
  // Night vision is ROV-cam only — disable it when leaving ROV cam
  if (!rovCamActive && nvActive) setNVActive(false);
});

// Night vision button (only enabled in orbit cam)
const nvBtn = document.createElement('button');
nvBtn.textContent = '🌑 Night Vision';
nvBtn.style.cssText = `
  background:rgba(0,80,160,0.45); border:1px solid rgba(0,140,255,0.45);
  border-radius:14px; color:#88ccff; font-family:Inter,sans-serif;
  font-size:11px; font-weight:600; padding:4px 13px; cursor:pointer;
  transition:background 0.15s, color 0.15s, border-color 0.15s, opacity 0.35s;
  letter-spacing:0.04em; white-space:nowrap;
  display:none; opacity:0;
`;
nvBtn.addEventListener('mouseenter', () => {
  if (!nvActive) { nvBtn.style.background = 'rgba(0,80,20,0.65)'; nvBtn.style.color = '#88ffaa'; }
});
nvBtn.addEventListener('mouseleave', () => {
  if (!nvActive) { nvBtn.style.background = 'rgba(0,80,160,0.45)'; nvBtn.style.color = '#88ccff'; }
});
nvBtn.addEventListener('click', () => {
  if (!rovCamActive) return; // NV is ROV-cam only
  setNVActive(!nvActive);
});
hintBar.appendChild(nvBtn);

// ─── Depth Nav Rail helpers ───────────────────────────────────────────────────
// Returns the zone index the ROV is currently inside (0 = sunlight … 3 = abyss)
function getZoneAtY(y) {
  for (let i = zones.length - 1; i >= 0; i--) {
    if (y <= zones[i].y + zones[i].height / 2) return i;
  }
  return 0;
}

// ─── Depth Nav Rail ───────────────────────────────────────────────────────────
const depthNav = document.createElement('div');
depthNav.style.cssText = `
  position:fixed; left:18px; top:50%; transform:translateY(-50%);
  display:flex; flex-direction:column; align-items:center; gap:0;
  z-index:300; user-select:none;
`;
document.body.appendChild(depthNav);

// Up arrow
const navUp = document.createElement('button');
navUp.innerHTML = '▲';
navUp.title = 'Scroll up';
navUp.style.cssText = `
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:6px 6px 0 0; color:#88aacc; font-size:13px;
  width:32px; height:28px; cursor:pointer; padding:0;
  font-family:Inter,sans-serif; line-height:1;
  transition:background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
`;
navUp.addEventListener('mouseenter', () => { navUp.style.background = 'rgba(0,80,160,0.7)'; navUp.style.color = '#ffffff'; });
navUp.addEventListener('mouseleave', () => { navUp.style.background = 'rgba(5,12,28,0.82)'; navUp.style.color = '#88aacc'; });
depthNav.appendChild(navUp);

// Track strip with zone pips
const navTrack = document.createElement('div');
navTrack.style.cssText = `
  width:32px; background:rgba(5,12,28,0.72);
  border-left:1px solid rgba(0,140,255,0.3);
  border-right:1px solid rgba(0,140,255,0.3);
  display:flex; flex-direction:column; align-items:center;
  padding:6px 0; gap:0; position:relative;
`;
depthNav.appendChild(navTrack);

const navPips = [];
zones.forEach((z, i) => {
  const pip = document.createElement('button');
  pip.title = z.name;
  pip.style.cssText = `
    width:20px; height:20px; border-radius:50%;
    background:rgba(0,80,160,0.35);
    border:1.5px solid rgba(0,140,255,0.35);
    cursor:pointer; margin:5px 0; padding:0;
    transition:background 0.2s, border-color 0.2s, transform 0.2s;
    position:relative; z-index:1;
  `;
  pip.addEventListener('mouseenter', () => {
    if (selectedZone !== i) pip.style.background = 'rgba(0,120,220,0.55)';
  });
  pip.addEventListener('mouseleave', () => {
    if (selectedZone !== i) pip.style.background = 'rgba(0,80,160,0.35)';
  });
  pip.addEventListener('click', () => {
    if (selectedZone === i) { deselectAll(); } else { selectZone(i); }
  });
  navTrack.appendChild(pip);
  navPips.push(pip);


});

// Down arrow
const navDown = document.createElement('button');
navDown.innerHTML = '▼';
navDown.title = 'Scroll down';
navDown.style.cssText = `
  background:rgba(5,12,28,0.82); border:1px solid rgba(0,140,255,0.3);
  border-radius:0 0 6px 6px; color:#88aacc; font-size:13px;
  width:32px; height:28px; cursor:pointer; padding:0;
  font-family:Inter,sans-serif; line-height:1;
  transition:background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
`;
navDown.addEventListener('mouseenter', () => { navDown.style.background = 'rgba(0,80,160,0.7)'; navDown.style.color = '#ffffff'; });
navDown.addEventListener('mouseleave', () => { navDown.style.background = 'rgba(5,12,28,0.82)'; navDown.style.color = '#88aacc'; });
depthNav.appendChild(navDown);

// ── Nav rail live-update (called every frame from animate()) ──────────────────
let _lastNavZone  = -1;

let _prevNavY = null; // previous frame rovCurrentY for velocity-based direction

function updateNavRail() {
  const currentZone = getZoneAtY(rovCurrentY);

  // Derive direction from actual ROV movement so WASD and zone-nav both work.
  // Compare real position change frame-to-frame; threshold avoids float noise.
  if (_prevNavY === null) _prevNavY = rovCurrentY;
  const dy = rovCurrentY - _prevNavY;
  _prevNavY = rovCurrentY;
  const dir = Math.abs(dy) > 0.0001 ? Math.sign(dy) : 0; // +1 = up, -1 = down

  // Zone pip highlight
  if (currentZone !== _lastNavZone) {
    _lastNavZone = currentZone;
    navPips.forEach((pip, i) => {
      // Don't override the "selected-zone" highlight already set by selectZone()
      // — only drive the pip when in ROV cam (free navigation) or when no
      // zone panel is open so the two systems don't fight each other.
      if (rovCamActive || selectedZone === null) {
        if (i === currentZone) {
          pip.style.background   = 'rgba(0,200,255,0.85)';
          pip.style.borderColor  = 'rgba(0,240,255,0.9)';
          pip.style.transform    = 'scale(1.25)';
          pip.classList.add('pip-active');
        } else {
          pip.style.background   = 'rgba(0,80,160,0.35)';
          pip.style.borderColor  = 'rgba(0,140,255,0.35)';
          pip.style.transform    = 'scale(1)';
          pip.classList.remove('pip-active');
        }
      }
    });
  }

  // Arrow highlight — update every frame based on actual movement direction
  const LIT_BG     = 'rgba(0,160,255,0.75)';
  const LIT_COLOR  = '#ffffff';
  const DIM_BG     = 'rgba(5,12,28,0.82)';
  const DIM_COLOR  = '#88aacc';
  // dir > 0 → moving up (ascending), dir < 0 → moving down (descending)
  navUp.style.background   = dir > 0 ? LIT_BG    : DIM_BG;
  navUp.style.color        = dir > 0 ? LIT_COLOR : DIM_COLOR;
  navDown.style.background = dir < 0 ? LIT_BG    : DIM_BG;
  navDown.style.color      = dir < 0 ? LIT_COLOR : DIM_COLOR;
}

// Light the sunlight pip immediately on load
updateNavRail();

// Arrow click handlers — step one zone at a time
navUp.addEventListener('click', () => {
  const current = selectedZone ?? 0;
  const next = Math.max(0, current - 1);
  if (next !== current) selectZone(next); else selectZone(0);
});
navDown.addEventListener('click', () => {
  const current = selectedZone ?? -1;
  const next = Math.min(zones.length - 1, current + 1);
  selectZone(next);
});

// Keep pips in sync with selectedZone — called from selectZone / deselectAll
function updateNavPips() {
  navPips.forEach((pip, i) => {
    if (i === selectedZone) {
      pip.style.background = 'rgba(0,160,255,0.85)';
      pip.style.borderColor = 'rgba(0,200,255,0.9)';
      pip.style.transform = 'scale(1.25)';
      pip.classList.add('pip-active');
    } else {
      pip.style.background = 'rgba(0,80,160,0.35)';
      pip.style.borderColor = 'rgba(0,140,255,0.35)';
      pip.style.transform = 'scale(1)';
      pip.classList.remove('pip-active');
    }
  });
}

// ─── Raycasting ───────────────────────────────────────────────────────────────
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let mouseDownPos = new THREE.Vector2();

renderer.domElement.addEventListener('mousedown', (e) => {
  mouseDownPos.set(e.clientX, e.clientY);
});

renderer.domElement.addEventListener('click', (e) => {
  const dx = e.clientX - mouseDownPos.x;
  const dy = e.clientY - mouseDownPos.y;
  if (Math.sqrt(dx * dx + dy * dy) > 5) return;

  mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(mouse, activeCamera);

  // 1. Check for Forensic Entities (Users, Servers)
  const forensicHits = raycaster.intersectObjects(scene.children, true);
  const forensicTarget = forensicHits.find(i => i.object.parent?.userData?.type || i.object.userData?.type);
  
  if (forensicTarget) {
    const data = forensicTarget.object.parent?.userData?.type ? forensicTarget.object.parent.userData : forensicTarget.object.userData;
    if (data.type === 'USER_NODE' || data.type === 'SERVER_RACK') {
      showForensicData(data);
      return; // Stop here if we hit a forensic entity
    }
  }

  // 2. Fallback to Zone Picking
  const zoneHits = raycaster.intersectObjects([...zoneBoxes, ...zonePickMeshes], false);
  if (zoneHits.length > 0) {
    const zoneId = zoneHits[0].object.userData.zoneId;
    if (selectedZone === zoneId) {
      deselectAll();
    } else {
      selectZone(zoneId);
    }
  }
});

function showForensicData(data) {
  const overlay = document.getElementById('ui-overlay');
  const title = document.getElementById('layer-title');
  const desc = document.getElementById('layer-desc');
  const level = document.getElementById('layer-level');
  
  const narrative = creatureNarratives.pt[data.type] || creatureNarratives.pt[data.nodeType] || { title: 'Unknown Entity', attack: 'Scanning...', defense: 'Evaluating...' };
  
  title.textContent = narrative.title || data.label || 'ENTITY_SCAN';
  level.textContent = data.type || 'DIGITAL_TRACE';
  
  desc.innerHTML = `
    <div style="margin-bottom: 15px; color: #ff0055; font-weight: bold;">[!] O ATAQUE:</div>
    <div style="margin-bottom: 20px;">${narrative.attack}</div>
    <div style="margin-bottom: 15px; color: #00ffa2; font-weight: bold;">[*] A DEFESA (SERAFIM):</div>
    <div>${narrative.defense}</div>
  `;
  
  overlay.classList.remove('hidden');
}

document.getElementById('close-btn')?.addEventListener('click', () => {
  document.getElementById('ui-overlay').classList.add('hidden');
});

// Cursor style on hover — throttled to every 50ms to reduce raycast overhead
let _lastHoverTime = 0;
renderer.domElement.addEventListener('mousemove', (e) => {
  const now = performance.now();
  if (now - _lastHoverTime < 50) return;
  _lastHoverTime = now;
  mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects([...zoneBoxes, ...zonePickMeshes], false);
  renderer.domElement.style.cursor = hits.length > 0 ? 'pointer' : 'default';
});

// ─── Bioluminescent Flash System ─────────────────────────────────────────────
// Each deep-zone creature gets a flash state for the startle response
const creatureFlashStates = new Map();

function initCreatureFlash(mesh, zoneId) {
  if (zoneId < 2) return; // only midnight + abyss
  let emissiveMat = null;
  let flashColor = new THREE.Color(0x00ffaa);
  mesh.traverse((child) => {
    if (child.isMesh && child.material && !emissiveMat) {
      emissiveMat = child.material;
      if (child.material.emissive && child.material.emissive.isColor) {
        flashColor = child.material.emissive.clone();
      }
    }
  });
  if (!emissiveMat) return;

  // Safely read emissive — fall back to black if undefined or not a Color
  const safeEmissive = (emissiveMat.emissive && emissiveMat.emissive.isColor)
    ? emissiveMat.emissive.clone()
    : new THREE.Color(0, 0, 0);

  const flashLight = new THREE.PointLight(0x00ffaa, 0, 2.2);
  flashLight.name = 'flashLight_' + mesh.name;
  flashLight.position.set(0, 0, 0); // will be updated each frame
  scene.add(flashLight);

  creatureFlashStates.set(mesh, {
    light: flashLight,
    flashing: false,
    timer: 0,
    duration: 0.55 + Math.random() * 0.35,
    cooldown: 4 + Math.random() * 5,
    cooldownTimer: Math.random() * 4,
    emissiveMat,
    baseEmissiveIntensity: emissiveMat.emissiveIntensity || 0,
    baseEmissive: safeEmissive,
    flashColor
  });
}

// Initialise flash states — runs here, AFTER initCreatureFlash is defined
allCreatures.forEach((c) => {
  if (c.userData && c.userData.zoneId >= 2) initCreatureFlash(c, c.userData.zoneId);
});

// ─── Bioluminescent Lights ────────────────────────────────────────────────────
const bioLights = [];
[zones[2], zones[3]].forEach((z) => {
  for (let i = 0; i < 3; i++) {
    const light = new THREE.PointLight(0x00ffaa, 0.8, 2.5);
    light.name = 'bioLight_' + z.id + '_' + i;
    light.position.set(
      (Math.random() - 0.5) * CUBE_W * 0.7,
      z.y + (Math.random() - 0.5) * z.height * 0.7,
      (Math.random() - 0.5) * CUBE_D * 0.7
    );
    scene.add(light);
    bioLights.push({ light, baseIntensity: 0.8, phase: Math.random() * Math.PI * 2 });
  }
});

// ─── Zone Ambient Bounce Lights ───────────────────────────────────────────────
// One warm PointLight per zone, placed at the top-centre of each zone wall.
// Tinted to the zone's water colour at low intensity so each depth band has
// its own ambient floor — no zone reads as pure black.
const zoneBounce = zones.map((z, i) => {
  // Intensities decrease with depth — surface is bright, abyss barely glows
  const intensities = [0.55, 0.38, 0.22, 0.12];
  // Distances cover the full zone height plus a little bleed into the next
  const distances   = [7.5,  6.5,  5.5,  4.5];
  const light = new THREE.PointLight(z.lightColor, intensities[i], distances[i]);
  light.name = 'zoneBounce_' + i;
  // Sit just inside the top of the zone so light falls downward through the box
  light.position.set(0, z.y + z.height * 0.42, 0);
  scene.add(light);
  return { light, base: intensities[i], phase: i * Math.PI * 0.5 };
});

// ─── Caustics ─────────────────────────────────────────────────────────────────
// Animated caustic pattern projected onto the sunlight zone floor using a
// canvas texture that redraws each frame — cheap but very convincing.
const CAUSTIC_RES = 256;
const causticCanvas = document.createElement('canvas');
causticCanvas.width = CAUSTIC_RES;
causticCanvas.height = CAUSTIC_RES;
const causticCtx = causticCanvas.getContext('2d');
const causticTex = new THREE.CanvasTexture(causticCanvas);
causticTex.wrapS = THREE.RepeatWrapping;
causticTex.wrapT = THREE.RepeatWrapping;
causticTex.repeat.set(1.5, 1.5);

// Flat plane sitting just above the zone-0 floor, facing up
// Lower caustic plane — tight pattern on the zone floor
const causticGeo = new THREE.PlaneGeometry(CUBE_W, CUBE_D);
const causticMat = new THREE.MeshBasicMaterial({
  map: causticTex,
  transparent: true,
  opacity: 0.02,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.FrontSide
});
const causticMesh = new THREE.Mesh(causticGeo, causticMat);
causticMesh.name = 'causticMesh';
causticMesh.rotation.x = -Math.PI / 2;
causticMesh.position.set(0, zones[0].y - zones[0].height / 2 + 0.05, 0);
scene.add(causticMesh);



const causticSideMeshes = [];

// ─── Worley / cellular caustic points ────────────────────────────────────────
// Pre-generate a grid of feature points that drift slowly over time.
// Each cell holds a base position + a per-point phase so adjacent cells
// animate at slightly different speeds — exactly like real caustic lenses.
const CAUSTIC_CELLS = 7;   // grid resolution (7×7 = 49 feature points)
const causticPts = [];
for (let cy = 0; cy < CAUSTIC_CELLS; cy++) {
  for (let cx = 0; cx < CAUSTIC_CELLS; cx++) {
    causticPts.push({
      bx: (cx + 0.5) / CAUSTIC_CELLS,  // base grid position (0–1)
      by: (cy + 0.5) / CAUSTIC_CELLS,
      px: (Math.random() - 0.5) * 0.7 / CAUSTIC_CELLS,  // jitter amplitude
      py: (Math.random() - 0.5) * 0.7 / CAUSTIC_CELLS,
      phx: Math.random() * Math.PI * 2,  // independent phase per axis
      phy: Math.random() * Math.PI * 2,
      spx: 0.18 + Math.random() * 0.14,  // drift speed x
      spy: 0.13 + Math.random() * 0.14,  // drift speed y
    });
  }
}

function drawCaustics(t) {
  const ctx = causticCtx;
  const w = CAUSTIC_RES;
  const imageData = ctx.createImageData(w, w);
  const d = imageData.data;

  // Animate feature points — each drifts on its own Lissajous path
  const pts = causticPts.map(p => ({
    x: p.bx + p.px * Math.sin(t * p.spx + p.phx),
    y: p.by + p.py * Math.cos(t * p.spy + p.phy),
  }));

  const CELLS = CAUSTIC_CELLS;
  const INV = 1 / w;

  for (let py = 0; py < w; py++) {
    for (let px = 0; px < w; px++) {
      const fx = px * INV;
      const fy = py * INV;

      // Find the two closest feature points (F1, F2) with torus wrap
      let d1 = 1e9, d2 = 1e9;
      for (let i = 0; i < pts.length; i++) {
        let dx = fx - pts[i].x;
        let dy = fy - pts[i].y;
        // Wrap distance so the pattern tiles seamlessly
        if (dx >  0.5) dx -= 1; else if (dx < -0.5) dx += 1;
        if (dy >  0.5) dy -= 1; else if (dy < -0.5) dy += 1;
        const dist = dx * dx + dy * dy;
        if (dist < d1) { d2 = d1; d1 = dist; }
        else if (dist < d2) { d2 = dist; }
      }

      // Caustic brightness lives at the boundary between cells (F2 - F1 ≈ 0)
      // Use a narrow exponential ridge centred on that boundary
      const boundary = Math.sqrt(d2) - Math.sqrt(d1);  // 0 at cell edge
      const ridge    = Math.exp(-boundary * boundary * 520); // sharpness

      // Add a second, broader halo around each ridge for the soft glow
      const halo     = Math.exp(-boundary * boundary * 60) * 0.28;
      const bright   = Math.min(1, ridge + halo);

      // Slight iridescent tint: shift hue very subtly per-cell via d1
      const tint = 0.06 * Math.sin(d1 * 900 + t * 0.4);
      const idx = (py * w + px) * 4;
      d[idx]     = Math.round(Math.min(255, bright * (190 + tint * 80)));  // R — faint warm
      d[idx + 1] = Math.round(bright * 230);                               // G
      d[idx + 2] = Math.round(bright * 255);                               // B — cool bright
      d[idx + 3] = Math.round(bright * 255);
    }
  }

  ctx.putImageData(imageData, 0, 0);
  causticTex.needsUpdate = true;
}

// ─── Vertical Light Lines (sunlight zone walls) ─────────────────────────────
// Many thin vertical lines on each wall that are bright at top and fade out
// toward the bottom, like shafts of sunlight penetrating through the surface.

const sunbeamMeshes = []; // kept for animate-loop compatibility

const zoneH   = zones[0].height;
const zoneTop = zones[0].y + zoneH / 2;
const hw = CUBE_W / 2;
const hd = CUBE_D / 2;

const VLINE_COUNT = 8;                // fewer lines — subtlety over density
const VLINE_WIDTH = 0.86;             // thicker, softer shafts
const VLINE_COLOR = new THREE.Color(0.72, 0.88, 0.96); // warm desaturated sky-white

// Create a very soft vertical gradient texture: gentle Gaussian horizontal fade + long vertical falloff
const vlCanvas = document.createElement('canvas');
vlCanvas.width = 64; vlCanvas.height = 256;
const vlCtx = vlCanvas.getContext('2d');
for (let x = 0; x < 64; x++) {
  const dx = (x - 31.5) / 31.5; // -1..1 from center
  const hFade = Math.exp(-dx * dx * 2.0); // wide soft horizontal Gaussian for more blur
  const vlGrad = vlCtx.createLinearGradient(0, 0, 0, 256);
  const a0 = (0.35 * hFade).toFixed(3);
  const a1 = (0.22 * hFade).toFixed(3);
  const a2 = (0.08 * hFade).toFixed(3);
  const a3 = (0.015 * hFade).toFixed(3);
  vlGrad.addColorStop(0.00, `rgba(220,240,255,${a0})`);
  vlGrad.addColorStop(0.20, `rgba(190,225,250,${a1})`);
  vlGrad.addColorStop(0.50, `rgba(140,195,240,${a2})`);
  vlGrad.addColorStop(0.80, `rgba(90,150,210,${a3})`);
  vlGrad.addColorStop(1.00, `rgba(60,120,190,0.0)`);
  vlCtx.fillStyle = vlGrad;
  vlCtx.fillRect(x, 0, 1, 256);
}
const vlTex = new THREE.CanvasTexture(vlCanvas);

// Glow halo texture — visible soft wash behind each shaft
const glowCanvas = document.createElement('canvas');
glowCanvas.width = 128;
glowCanvas.height = 256;
const glowCtx = glowCanvas.getContext('2d');
for (let x = 0; x < 128; x++) {
  const dx = (x - 63.5) / 63.5;
  const hFade = Math.exp(-dx * dx * 0.7); // even wider, softer spread for more blur
  const gGrad = glowCtx.createLinearGradient(0, 0, 0, 256);
  const a0 = (0.38 * hFade).toFixed(3);
  const a1 = (0.25 * hFade).toFixed(3);
  const a2 = (0.12 * hFade).toFixed(3);
  const a3 = (0.04 * hFade).toFixed(3);
  gGrad.addColorStop(0.00, `rgba(210,235,255,${a0})`);
  gGrad.addColorStop(0.25, `rgba(170,215,248,${a1})`);
  gGrad.addColorStop(0.55, `rgba(120,180,235,${a2})`);
  gGrad.addColorStop(0.80, `rgba(70,140,210,${a3})`);
  gGrad.addColorStop(1.00, `rgba(50,110,190,0.0)`);
  glowCtx.fillStyle = gGrad;
  glowCtx.fillRect(x, 0, 1, 256);
}
const glowTex = new THREE.CanvasTexture(glowCanvas);

// Store all vertical-line meshes for animation
const scanLineMeshes = [];
const glowLineMeshes = [];

// Walls to place lines on: front, back, left, right
const wallDefs = [
  { axis: 'z', pos:  hd - 0.04, ry: 0,              span: CUBE_W, label: 'front' },
  { axis: 'z', pos: -hd + 0.04, ry: Math.PI,        span: CUBE_W, label: 'back'  },
  { axis: 'x', pos: -hw + 0.04, ry: Math.PI / 2,    span: CUBE_D, label: 'left'  },
  { axis: 'x', pos:  hw - 0.04, ry: -Math.PI / 2,   span: CUBE_D, label: 'right' },
];

const lineH = zoneH - 0.3; // vertical height of each line, slight inset
const yCenter = zones[0].y + 0.15; // nudge up slightly so top is bright at zone top

wallDefs.forEach((wall) => {
  for (let i = 0; i < VLINE_COUNT; i++) {
    // Randomised brightness — wide range for natural variation
    const brightVar = 0.8 + Math.random() * 0.7;
    // Random width variation — some shafts wider/narrower
    const widthVar = 1.2 + Math.random() * 0.6;

    // Base fraction across the wall
    const baseFrac = (i + 0.5) / VLINE_COUNT;
    const jitter = (Math.random() - 0.5) * 0.6 / VLINE_COUNT;
    const frac = Math.max(0.02, Math.min(0.98, baseFrac + jitter));
    const localX = -wall.span / 2 + frac * wall.span;

    // 0 at centre, 1 at extreme edge
    const edgeT = Math.abs(localX) / (wall.span * 0.5);

    // Base widths
    const lineWidthBase = VLINE_WIDTH * widthVar;
    const glowWidthBase = VLINE_WIDTH * widthVar * 2.5;

    // Width shaping:
    // main line stays fairly full, glow narrows much more near edges
    const lineEdgeScale = THREE.MathUtils.lerp(1.0, 0.72, Math.pow(edgeT, 1.35));
    const glowEdgeScale = THREE.MathUtils.lerp(1.0, 0.22, Math.pow(edgeT, 1.9));

    const finalLineWidth = lineWidthBase * lineEdgeScale;
    const finalGlowWidth = glowWidthBase * glowEdgeScale;

    // Alpha shaping:
    // keep center rich, fade both line + glow toward the sides
    const lineAlphaScale = THREE.MathUtils.lerp(1.0, 0.55, Math.pow(edgeT, 1.6));
    const glowAlphaScale = THREE.MathUtils.lerp(1.0, 0.18, Math.pow(edgeT, 2.0));

    const tex = vlTex.clone();
    tex.needsUpdate = true;

    const geo = new THREE.PlaneGeometry(finalLineWidth, lineH);
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      color: VLINE_COLOR,
      transparent: true,
      opacity: 0.25 * brightVar * lineAlphaScale,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'vline_' + wall.label + '_' + i;

    if (wall.axis === 'z') {
      mesh.position.set(localX, yCenter, wall.pos);
    } else {
      mesh.position.set(wall.pos, yCenter, localX);
    }
    mesh.rotation.y = wall.ry;

    mesh.userData.baseOpacity = 0.25 * brightVar * lineAlphaScale;
    mesh.userData.idx = i;
    mesh.userData.phaseOffset = Math.random() * Math.PI * 2;

    scene.add(mesh);
    scanLineMeshes.push(mesh);

    // Glow halo — wide in centre, narrower + dimmer near edges
    const gTex = glowTex.clone();
    gTex.needsUpdate = true;

    const gGeo = new THREE.PlaneGeometry(finalGlowWidth, lineH);
    const gMat = new THREE.MeshBasicMaterial({
      map: gTex,
      color: VLINE_COLOR,
      transparent: true,
      opacity: 0.22 * brightVar * glowAlphaScale,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const gMesh = new THREE.Mesh(gGeo, gMat);
    gMesh.name = 'vline_glow_' + wall.label + '_' + i;

    if (wall.axis === 'z') {
      gMesh.position.set(localX, yCenter, wall.pos);
    } else {
      gMesh.position.set(wall.pos, yCenter, localX);
    }
    gMesh.rotation.y = wall.ry;
    gMesh.renderOrder = mesh.renderOrder - 1;

    gMesh.userData.baseOpacity = 0.22 * brightVar * glowAlphaScale;
    gMesh.userData.phaseOffset = mesh.userData.phaseOffset;

    scene.add(gMesh);
    glowLineMeshes.push(gMesh);
  }
});


// Export for animate loop
window._scanLineMeshes = scanLineMeshes;
window._glowLineMeshes = glowLineMeshes;

// ─── Ground Plane ────────────────────────────────────────────────────────────
// A wide flat plane the diorama sits on, matched to the background colour.
const GROUND_Y = -TOTAL_H - 0.42;
const groundGeo = new THREE.PlaneGeometry(120, 120);
groundGeo.rotateX(-Math.PI / 2);
const groundMat = new THREE.MeshStandardMaterial({
  color: 0x0d1628,
  roughness: 0.95,
  metalness: 0.0,
  emissive: 0x050a18,
  emissiveIntensity: 0.15,
});
const groundMesh = new THREE.Mesh(groundGeo, groundMat);
groundMesh.name = 'groundPlane';
groundMesh.position.set(0, GROUND_Y, 0);
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// ─── Ground Caustics ─────────────────────────────────────────────────────────
// Animated caustic ripple overlay on the ground, simulating light scattered
// through the water above and spilling out beneath the diorama.
const GCAUSTIC_RES = 256;
const gcausticCanvas = document.createElement('canvas');
gcausticCanvas.width = gcausticCanvas.height = GCAUSTIC_RES;
const gcausticCtx = gcausticCanvas.getContext('2d');

const gcausticTex = new THREE.CanvasTexture(gcausticCanvas);
gcausticTex.wrapS = gcausticTex.wrapT = THREE.RepeatWrapping;
gcausticTex.repeat.set(1.8, 1.8);

const gcausticMat = new THREE.MeshBasicMaterial({
  map: gcausticTex,
  transparent: true,
  opacity: 0.04,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
const gcausticMesh = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), gcausticMat);
gcausticMesh.name = 'groundCaustic';
gcausticMesh.rotation.x = -Math.PI / 2;
gcausticMesh.position.set(0, GROUND_Y + 0.01, 0);
scene.add(gcausticMesh);

// Vignette overlay — soft radial shadow under the diorama to ground it visually
const vigCanvas = document.createElement('canvas');
vigCanvas.width = vigCanvas.height = 512;
const vigCtx = vigCanvas.getContext('2d');
const vigGrad = vigCtx.createRadialGradient(256, 256, 30, 256, 256, 256);
vigGrad.addColorStop(0.0,  'rgba(0,0,0,0.72)');
vigGrad.addColorStop(0.28, 'rgba(0,0,0,0.45)');
vigGrad.addColorStop(0.55, 'rgba(0,0,0,0.18)');
vigGrad.addColorStop(1.0,  'rgba(0,0,0,0.0)');
vigCtx.fillStyle = vigGrad;
vigCtx.fillRect(0, 0, 512, 512);
const vigTex = new THREE.CanvasTexture(vigCanvas);
const vigMat = new THREE.MeshBasicMaterial({
  map: vigTex,
  transparent: true,
  opacity: 1.0,
  blending: THREE.NormalBlending,
  depthWrite: false,
});
const vigMesh = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), vigMat);
vigMesh.name = 'groundVignette';
vigMesh.rotation.x = -Math.PI / 2;
vigMesh.position.set(0, GROUND_Y + 0.02, 0);
scene.add(vigMesh);

// Ground caustic feature points — fewer cells = larger, more diffuse polygons
// (light has travelled much farther to reach the seabed)
const GCAUSTIC_CELLS = 5;
const gcausticPts = [];
for (let cy = 0; cy < GCAUSTIC_CELLS; cy++) {
  for (let cx = 0; cx < GCAUSTIC_CELLS; cx++) {
    gcausticPts.push({
      bx: (cx + 0.5) / GCAUSTIC_CELLS,
      by: (cy + 0.5) / GCAUSTIC_CELLS,
      px: (Math.random() - 0.5) * 0.65 / GCAUSTIC_CELLS,
      py: (Math.random() - 0.5) * 0.65 / GCAUSTIC_CELLS,
      phx: Math.random() * Math.PI * 2,
      phy: Math.random() * Math.PI * 2,
      spx: 0.08 + Math.random() * 0.07,  // slower drift — deep water is calmer
      spy: 0.07 + Math.random() * 0.07,
    });
  }
}

function drawGroundCaustics(t) {
  const ctx = gcausticCtx;
  const w = GCAUSTIC_RES;
  const imageData = ctx.createImageData(w, w);
  const d = imageData.data;
  const INV = 1 / w;

  const pts = gcausticPts.map(p => ({
    x: p.bx + p.px * Math.sin(t * p.spx + p.phx),
    y: p.by + p.py * Math.cos(t * p.spy + p.phy),
  }));

  for (let py = 0; py < w; py++) {
    for (let px = 0; px < w; px++) {
      const fx = px * INV;
      const fy = py * INV;
      let d1 = 1e9, d2 = 1e9;
      for (let i = 0; i < pts.length; i++) {
        let dx = fx - pts[i].x;
        let dy = fy - pts[i].y;
        if (dx >  0.5) dx -= 1; else if (dx < -0.5) dx += 1;
        if (dy >  0.5) dy -= 1; else if (dy < -0.5) dy += 1;
        const dist = dx * dx + dy * dy;
        if (dist < d1) { d2 = d1; d1 = dist; }
        else if (dist < d2) { d2 = dist; }
      }
      const boundary = Math.sqrt(d2) - Math.sqrt(d1);
      // Broader ridge (softer) — deep-water caustics are more diffuse
      const ridge  = Math.exp(-boundary * boundary * 280);
      const halo   = Math.exp(-boundary * boundary * 30) * 0.22;
      const bright = Math.min(1, ridge + halo);
      // Radial distance fade — caustics fade out toward the edges of the tile
      // so distant floor areas fall into darkness naturally
      const cx = fx - 0.5, cy = fy - 0.5;
      const r = Math.sqrt(cx * cx + cy * cy);          // 0 at centre, ~0.7 at corner
      const distFade = Math.max(0, 1 - (r / 0.48) * (r / 0.48)); // smooth square falloff
      const finalBright = bright * distFade;
      const idx = (py * w + px) * 4;
      d[idx]     = Math.round(finalBright * 22);
      d[idx + 1] = Math.round(finalBright * 58);
      d[idx + 2] = Math.round(finalBright * 110);
      d[idx + 3] = Math.round(finalBright * 255);
    }
  }
  ctx.putImageData(imageData, 0, 0);
  gcausticTex.needsUpdate = true;
}

// ─── Ocean Floor ─────────────────────────────────────────────────────────────
const floorGeo = new THREE.BoxGeometry(CUBE_W, 0.4, CUBE_D);
const floorMat = new THREE.MeshStandardMaterial({ color: 0x0f1020, roughness: 0.95 });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.name = 'oceanFloor';
floor.position.set(0, -TOTAL_H - 0.2, 0);
floor.receiveShadow = true;
scene.add(floor);

// Rocks on ocean floor
for (let i = 0; i < 12; i++) {
  const r = 0.15 + Math.random() * 0.35;
  const rock = new THREE.Mesh(
    new THREE.DodecahedronGeometry(r, 0),
    new THREE.MeshStandardMaterial({ color: 0x221a14, roughness: 1 })
  );
  rock.name = 'rock_' + i;
  rock.position.set(
    (Math.random() - 0.5) * (CUBE_W - 1),
    -TOTAL_H + 0.05,
    (Math.random() - 0.5) * (CUBE_D - 1)
  );
  rock.rotation.set(Math.random(), Math.random(), Math.random());
  scene.add(rock);
}

// ─── Hydrothermal Vents ───────────────────────────────────────────────────────
const FLOOR_Y = -TOTAL_H;
const ventPositions = [
  { x: -3.2, z: -2.5 },
  { x:  2.8, z:  1.8 },
  { x: -1.0, z:  3.2 },
  { x:  3.8, z: -3.5 },
];

// Per-vent plume particle system
const ventPlumes = [];
const PLUME_COUNT = 55;

ventPositions.forEach((vp, vi) => {
  // Vent chimney stack (main tube)
  const chimneyMat = new THREE.MeshStandardMaterial({ color: 0x2a1a0a, roughness: 1.0 });

  const baseGeo = new THREE.CylinderGeometry(0.22, 0.32, 0.55, 9);
  const base = new THREE.Mesh(baseGeo, chimneyMat);
  base.name = 'ventBase_' + vi;
  base.position.set(vp.x, FLOOR_Y + 0.27, vp.z);
  scene.add(base);

  const shaftGeo = new THREE.CylinderGeometry(0.14, 0.20, 0.9, 9);
  const shaft = new THREE.Mesh(shaftGeo, chimneyMat);
  shaft.name = 'ventShaft_' + vi;
  shaft.position.set(vp.x, FLOOR_Y + 0.95, vp.z);
  scene.add(shaft);

  // Glowing rim at top of chimney
  const rimGeo = new THREE.TorusGeometry(0.16, 0.045, 8, 20);
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0xff5500, emissive: 0xff4400, emissiveIntensity: 3.5,
    roughness: 0.3
  });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.name = 'ventRim_' + vi;
  rim.rotation.x = Math.PI / 2;
  rim.position.set(vp.x, FLOOR_Y + 1.42, vp.z);
  scene.add(rim);

  // Mineral crust deposits around base (irregular lumps)
  for (let k = 0; k < 6; k++) {
    const angle = (k / 6) * Math.PI * 2 + Math.random() * 0.4;
    const dist = 0.3 + Math.random() * 0.25;
    const lumpGeo = new THREE.DodecahedronGeometry(0.08 + Math.random() * 0.1, 0);
    const lumpMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 1 });
    const lump = new THREE.Mesh(lumpGeo, lumpMat);
    lump.name = 'ventLump_' + vi + '_' + k;
    lump.position.set(
      vp.x + Math.cos(angle) * dist,
      FLOOR_Y + 0.08,
      vp.z + Math.sin(angle) * dist
    );
    lump.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(lump);
  }

  // Point light inside the vent glow
  const ventLight = new THREE.PointLight(0xff6600, 2.8, 4.5);
  ventLight.name = 'ventLight_' + vi;
  ventLight.position.set(vp.x, FLOOR_Y + 1.5, vp.z);
  scene.add(ventLight);

  // Plume particle buffer
  const plumeGeo = new THREE.BufferGeometry();
  const plumePos = new Float32Array(PLUME_COUNT * 3);
  const plumeVel = new Float32Array(PLUME_COUNT * 3);
  const plumeAge = new Float32Array(PLUME_COUNT);
  const plumeLife = new Float32Array(PLUME_COUNT);

  for (let i = 0; i < PLUME_COUNT; i++) {
    plumeAge[i] = Math.random();
    plumeLife[i] = 0.6 + Math.random() * 0.8;
    const spread = 0.08;
    plumeVel[i * 3]     = (Math.random() - 0.5) * spread;
    plumeVel[i * 3 + 1] = 0.007 + Math.random() * 0.009;
    plumeVel[i * 3 + 2] = (Math.random() - 0.5) * spread;
    plumePos[i * 3]     = vp.x + (Math.random() - 0.5) * 0.12;
    plumePos[i * 3 + 1] = FLOOR_Y + 1.4 + plumeAge[i] * plumeLife[i] * 2.2;
    plumePos[i * 3 + 2] = vp.z + (Math.random() - 0.5) * 0.12;
  }

  plumeGeo.setAttribute('position', new THREE.BufferAttribute(plumePos, 3));
  const plumeMat = new THREE.PointsMaterial({
    color: 0xaa5500,
    size: 0.08,
    transparent: true,
    opacity: 0.35,
    sizeAttenuation: true
  });
  const plumeMesh = new THREE.Points(plumeGeo, plumeMat);
  plumeMesh.name = 'ventPlume_' + vi;
  plumeMesh.frustumCulled = false;
  scene.add(plumeMesh);

  ventPlumes.push({
    mesh: plumeMesh, geo: plumeGeo,
    pos: plumePos, vel: plumeVel,
    age: plumeAge, life: plumeLife,
    ox: vp.x, oz: vp.z,
    light: ventLight,
    phase: Math.random() * Math.PI * 2
  });
});

// Vent tube worms (tall thin cylinders with bright tips)
const wormPositions = [
  { x: -3.5, z: -2.1 }, { x: -3.0, z: -2.9 }, { x: -2.7, z: -2.4 },
  { x:  2.5, z:  2.1 }, { x:  3.1, z:  1.5 }, { x:  2.9, z:  2.4 },
  { x: -1.3, z:  3.0 }, { x: -0.7, z:  2.9 },
  { x:  4.1, z: -3.2 }, { x:  3.6, z: -3.8 }
];

wormPositions.forEach((wp, wi) => {
  const h = 0.35 + Math.random() * 0.45;
  const wormGeo = new THREE.CylinderGeometry(0.03, 0.04, h, 6);
  const wormMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
  const worm = new THREE.Mesh(wormGeo, wormMat);
  worm.name = 'tubeWorm_' + wi;
  worm.position.set(wp.x, FLOOR_Y + h / 2, wp.z);
  worm.rotation.z = (Math.random() - 0.5) * 0.25;
  scene.add(worm);

  // Bright plume tip (red/white)
  const tipColors = [0xff2222, 0xff4444, 0xffaaaa, 0xee3333];
  const tipMat = new THREE.MeshStandardMaterial({
    color: tipColors[wi % tipColors.length],
    emissive: tipColors[wi % tipColors.length],
    emissiveIntensity: 1.8
  });
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 7), tipMat);
  tip.name = 'tubeWormTip_' + wi;
  tip.position.set(wp.x, FLOOR_Y + h + 0.04, wp.z);
  scene.add(tip);
});

// ─── Zone State Snapshot (updated once per frame) ────────────────────────────
const zoneState = {
  causticDepthFade: 1,
  torchBlend: 0,
  torchActive: false
};

// ─── Animation ────────────────────────────────────────────────────────────────
const clock = new THREE.Clock();
let _frameCount = 0;
// Pre-allocated vectors — reused every frame to avoid GC pressure
const _rovWorldPos   = new THREE.Vector3();
const _cWorldPos     = new THREE.Vector3();

function animateVentPlumes(t) {
  ventPlumes.forEach((vp) => {
    const pos = vp.pos;
    const vel = vp.vel;

    for (let i = 0; i < PLUME_COUNT; i++) {
      vp.age[i] += 0.008;
      if (vp.age[i] > vp.life[i]) {
        // Respawn particle at vent mouth
        vp.age[i] = 0;
        vp.life[i] = 0.6 + Math.random() * 0.8;
        pos[i * 3]     = vp.ox + (Math.random() - 0.5) * 0.12;
        pos[i * 3 + 1] = FLOOR_Y + 1.42;
        pos[i * 3 + 2] = vp.oz + (Math.random() - 0.5) * 0.12;
        const spread = 0.07;
        vel[i * 3]     = (Math.random() - 0.5) * spread;
        vel[i * 3 + 1] = 0.007 + Math.random() * 0.009;
        vel[i * 3 + 2] = (Math.random() - 0.5) * spread;
        continue;
      }
      const progress = vp.age[i] / vp.life[i];
      // Rise upward with widening lateral drift
      pos[i * 3]     += vel[i * 3] * (1 + progress * 0.8);
      pos[i * 3 + 1] += vel[i * 3 + 1];
      pos[i * 3 + 2] += vel[i * 3 + 2] * (1 + progress * 0.8);
      // Clamp particles to stay within the abyss zone vertical bounds
      const abyssTop = zones[3].y + zones[3].height / 2;
      if (pos[i * 3 + 1] > abyssTop) pos[i * 3 + 1] = abyssTop;
      // Add a gentle swirl
      const swirl = 0.0015;
      const px = pos[i * 3] - vp.ox;
      const pz = pos[i * 3 + 2] - vp.oz;
      pos[i * 3]     += -pz * swirl;
      pos[i * 3 + 2] +=  px * swirl;
    }

    vp.geo.attributes.position.needsUpdate = true;

    // Fade opacity based on average age
    const avgProgress = vp.age.reduce((a, b) => a + b, 0) / PLUME_COUNT / 0.7;
    vp.mesh.material.opacity = 0.22 + 0.10 * Math.sin(t * 1.8 + vp.phase);

    // Pulse vent light
    vp.light.intensity = 2.2 + 1.2 * Math.sin(t * 3.1 + vp.phase);
  });
}

function animate() {
  const t = clock.getElapsedTime();
  const dt = clock.getDelta ? 0.016 : 0.016;
  const updateCreaturesThisFrame = (_frameCount % 2 === 0);

  // ── Zone state snapshot — compute once, use everywhere ───────────────────
  const midnightTop = zones[2].y + zones[2].height / 2;
  const inDeep = rovCurrentY < midnightTop;
  const deepFrac = inDeep
    ? Math.min(1, (midnightTop - rovCurrentY) / (zones[2].height * 0.6))
    : 0;
  torchBlend += (deepFrac - torchBlend) * 0.035;
  torchActive = torchBlend > 0.01;
  zoneState.torchBlend       = torchBlend;
  zoneState.torchActive      = torchActive;
  zoneState.causticDepthFade = Math.max(0, 1 - Math.abs(rovCurrentY / zones[0].height));

  // Wave surface
  const pos = waveGeo.attributes.position;
  for (let i = 0; i < waveData.length; i++) {
    const d = waveData[i];
    const wave = Math.sin(d.ox * 1.2 + t * 1.5 + d.phase) * 0.07
               + Math.sin(d.oz * 0.9 + t * 1.1 + d.phase * 0.7) * 0.05
               + Math.sin((d.ox + d.oz) * 0.7 + t * 2.0) * 0.03;
    pos.setY(i, wave);
  }
  pos.needsUpdate = true;
  // Recompute normals every 8th frame — restores specular highlights dancing
  // across the wave surface while still saving ~75% of the original cost.
   if (_frameCount % 8 === 0) {
     waveGeo.computeVertexNormals();
   }

  // Ship bobbing on waves
  shipGroup.position.y = Math.sin(t * 1.2) * 0.06 + Math.sin(t * 0.7) * 0.03;
  shipGroup.rotation.z = Math.sin(t * 0.9) * 0.015;
  shipGroup.rotation.x = Math.sin(t * 0.6) * 0.01;

  // Title floating motion
  const titleGrp = _cachedTitleGroup;
  if (titleGrp) {
    if (titleGrp.userData.baseY === undefined) titleGrp.userData.baseY = titleGrp.position.y;
    titleGrp.position.y = titleGrp.userData.baseY + Math.sin(t * 0.3) * 0.25 + Math.sin(t * 0.17) * 0.1;
    titleGrp.rotation.y = Math.sin(t * 0.15) * 0.015;
  }

  // ── ROV manual input (WASD / arrows) ─────────────────────────────────────
  applyROVInput();

  // Cruise rovTargetY toward destination — speed scales with remaining distance
  // so a cross-ocean dive accelerates quickly and decelerates smoothly on arrival
  const rovDelta = rovDestY - rovTargetY;
  rovCruising = Math.abs(rovDelta) > 0.02;
  if (Math.abs(rovDelta) > 0.001) {
    // totalTrip is the full journey length (set once when destination changes);
    // use absolute delta fraction to ramp speed between ROV_CRUISE_SPEED and
    // ROV_CRUISE_SPEED_MAX proportional to how far is still left to travel.
    const tripFrac  = Math.min(1, Math.abs(rovDelta) / TOTAL_H);
    const dynSpeed  = ROV_CRUISE_SPEED + (ROV_CRUISE_SPEED_MAX - ROV_CRUISE_SPEED) * tripFrac;
    rovTargetY += Math.sign(rovDelta) * Math.min(Math.abs(rovDelta), dynSpeed);
  } else {
    rovTargetY = rovDestY;
  }

  // ROV smooth descent to target
  rovCurrentY += (rovTargetY - rovCurrentY) * 0.055;
  rovGroup.position.y = rovCurrentY;
  // In ROV cam keep chassis perfectly flat — tilt only in orbit cam view
  if (rovCamActive) {
    rovGroup.rotation.z = 0;
    rovGroup.rotation.x = 0;
  } else {
    rovGroup.rotation.z = (rovTargetY - rovCurrentY) * 0.15;
    rovGroup.rotation.x = Math.sin(t * 1.3) * 0.03;
  }
  rovGroup.position.x = 1.30 + Math.sin(t * 0.7) * 0.08;

  // Apply mouse-look to the pivot (yaw around world-up, pitch around local X)
  rovLookPivot.rotation.set(0, rovLook.yaw, 0, 'YXZ');

  // ROV thruster spin — spins faster while cruising
  const thrusterRate = rovCruising ? 18 : 5;
  if (_rovPropHub0) _rovPropHub0.rotation.y = t * thrusterRate;
  if (_rovPropHub1) _rovPropHub1.rotation.y = -t * thrusterRate;

  // ROV transponder beacon — slow red blink
  if (_rovBeaconMesh) {
    const beaconPulse = Math.sin(t * 3.5) > 0.6 ? 1 : 0;
    _rovBeaconMesh.material.emissiveIntensity = beaconPulse * 4.0;
  }

  // ROV radar / vertical thruster slow spin
  if (_rovVTShroud) _rovVTShroud.rotation.y = t * (rovCruising ? 8 : 2.5);

  // ── ROV Wake particles ────────────────────────────────────────────────────
  // Spawn new particles from the rear of the ROV while cruising
  if (rovCruising) {
    for (let i = 0; i < WAKE_COUNT; i++) {
      if (wakeAge[i] >= wakeLife[i]) {
        // Respawn dead particle at ROV rear
        wakeAge[i] = 0;
        wakeLife[i] = 0.35 + Math.random() * 0.45;
        wakePos[i * 3]     = rovGroup.position.x + 0.28 + (Math.random() - 0.5) * 0.12;
        wakePos[i * 3 + 1] = rovGroup.position.y + (Math.random() - 0.5) * 0.1;
        wakePos[i * 3 + 2] = rovGroup.position.z + (Math.random() - 0.5) * 0.18;
        // Drift away from ROV rear and upward slightly
        wakeVel[i * 3]     = 0.005 + Math.random() * 0.008;
        wakeVel[i * 3 + 1] = (Math.random() - 0.3) * 0.006;
        wakeVel[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
        break; // spawn one per frame to avoid burst
      }
    }
  }
  // Tick all wake particles
  let wakeAliveCount = 0;
  for (let i = 0; i < WAKE_COUNT; i++) {
    if (wakeAge[i] < wakeLife[i]) {
      wakeAge[i] += 0.016;
      wakePos[i * 3]     += wakeVel[i * 3];
      wakePos[i * 3 + 1] += wakeVel[i * 3 + 1];
      wakePos[i * 3 + 2] += wakeVel[i * 3 + 2];
      wakeAliveCount++;
    }
  }
  wakeGeo.attributes.position.needsUpdate = true;
  // Fade opacity based on whether any are alive and cruising state
  const targetWakeOpacity = (rovCruising && wakeAliveCount > 0) ? 0.45 : 0.0;
  wakeMat.opacity += (targetWakeOpacity - wakeMat.opacity) * 0.12;

  // ── Torch / darkness effect ──────────────────────────────────────────────
  // Fade ambient light down as ROV descends into dark
  ambientLight.intensity = AMBIENT_NORMAL - (AMBIENT_NORMAL - AMBIENT_DARK) * torchBlend;

  // Fade sun / fill / rim lights down as ROV descends into darkness
  sunLight.intensity  = 3.2  * (1 - torchBlend * 0.92);
  fillLight.intensity = 0.45 * (1 - torchBlend * 0.88);
  rimLight.intensity  = 0.28 * (1 - torchBlend * 0.80);
  hemiLight.intensity = 0.55 * (1 - torchBlend * 0.85);

  // Keep NV ambient override stable while animate() also tries to modulate ambientLight
  // (NV sets a floor; torch/depth code writes its own value — merge them)
  if (nvActive) {
    ambientLight.intensity = Math.max(ambientLight.intensity, NV_AMBIENT_BOOST);
  }

  // Boost ROV point light & range in the dark
  rovSpotlight.intensity = THREE.MathUtils.lerp(ROV_POINT_NORMAL, ROV_POINT_DARK, torchBlend)
                         * (1 + 0.12 * Math.sin(t * 7.3));
  rovSpotlight.distance  = THREE.MathUtils.lerp(ROV_RANGE_NORMAL, ROV_RANGE_DARK, torchBlend);
  rovSpotlight.color.setHSL(0.58, 0.6, THREE.MathUtils.lerp(0.7, 0.9, torchBlend));

  // Visible cone — rings in orbit cam, solid cone in ROV cam
  const flicker = 1 + 0.06 * Math.sin(t * 9.1 + 0.5);
  torchConeSegments.forEach((ring) => {
    ring.material.opacity = ring._baseAlpha * torchBlend * flicker;
  });
  // ROV cam ring: inner crisp ring + outer halo, fades in with torchBlend
  rovConeMat.opacity    = torchBlend * (0.55 + 0.08 * Math.sin(t * 7.7)) * flicker;
  rovHaloRingMat.opacity = torchBlend * (0.18 + 0.05 * Math.sin(t * 5.3)) * flicker;
  torchHaloMat.opacity = torchBlend * (0.55 + 0.12 * Math.sin(t * 11.3)) * flicker;

  // ── Torch motes ──────────────────────────────────────────────────────────
  moteMat.opacity = torchBlend * 0.72 * flicker;
  if (torchActive) {
    for (let i = 0; i < MOTE_COUNT; i++) {
      // Drift
      motePos[i * 3]     += moteVel[i * 3];
      motePos[i * 3 + 1] += moteVel[i * 3 + 1] + Math.sin(t * 0.6 + motePhase[i]) * 0.0003;
      motePos[i * 3 + 2] += moteVel[i * 3 + 2] + Math.cos(t * 0.5 + motePhase[i]) * 0.0003;

      // Check if mote has drifted outside the cone frustum or past the end
      const mx = motePos[i * 3];
      const my = motePos[i * 3 + 1];
      const mz = motePos[i * 3 + 2];
      const dist = -(mx + 0.32); // distance along beam from emitter
      const maxR  = (dist / CONE_LENGTH) * 1.1;
      const radSq = my * my + mz * mz;
      if (dist < 0 || dist > CONE_LENGTH || radSq > maxR * maxR * 1.1) {
        resetMote(i);
      }
    }
    moteGeo.attributes.position.needsUpdate = true;
  }

  // Update tether
  updateTether();

  // Cache active camera Y once — used to cull off-screen creatures & lights
  const camY = activeCamera.position.y;
  const CULL_Y = 8; // units above/below camera to keep animated

  // Bioluminescent pulsing — skip lights more than CULL_Y from camera
  bioLights.forEach((b) => {
    if (Math.abs(b.light.position.y - camY) > CULL_Y) return;
    b.light.intensity = b.baseIntensity * (0.7 + 0.6 * Math.sin(t * 2.5 + b.phase));
  });

  // Zone bounce lights — very slow, gentle undulation so each depth band
  // breathes softly rather than sitting at a flat static level
  zoneBounce.forEach((b) => {
    b.light.intensity = b.base * (0.88 + 0.12 * Math.sin(t * 0.4 + b.phase));
  });

  // ── Creature flash / startle response ────────────────────────────────────
  rovGroup.getWorldPosition(_rovWorldPos);
  const TRIGGER_DIST = 1.8;
  // Proximity check is throttled to every 3rd frame — creatures react fast
  // enough at 20fps checks and it saves ~N getWorldPosition calls per frame.
  const doProximityCheck = (_frameCount % 3 === 0);

  if (updateCreaturesThisFrame) {
  creatureFlashStates.forEach((state, mesh) => {
    // Move flash light to creature world pos
    mesh.getWorldPosition(_cWorldPos);
    // Skip flash logic for creatures well outside the visible zone
    if (Math.abs(_cWorldPos.y - camY) > CULL_Y) {
      state.light.intensity = 0;
      return;
    }
    state.light.position.copy(_cWorldPos);

    if (state.flashing) {
      // Animate flash: quick rise then decay
      state.timer += 0.016;
      const progress = state.timer / state.duration;
      // Sharp attack, smooth decay curve
      const envelope = progress < 0.18
        ? (progress / 0.18)                      // fast attack
        : Math.pow(1 - (progress - 0.18) / 0.82, 1.8); // smooth decay
      const intensity = Math.max(0, envelope) * (3.5 + 1.2 * Math.sin(t * 22));
      state.light.intensity = intensity;

      // Pulse emissive on the material
      state.emissiveMat.emissiveIntensity = state.baseEmissiveIntensity
        + Math.max(0, envelope) * 4.5;
      // Shift emissive colour toward flash colour during burst
      if (state.emissiveMat.emissive) {
        state.emissiveMat.emissive.lerpColors(
          state.baseEmissive, state.flashColor, Math.max(0, envelope) * 0.8
        );
      }

      if (state.timer >= state.duration) {
        // End flash — restore material
        state.flashing = false;
        state.timer = 0;
        state.cooldownTimer = state.cooldown;
        state.light.intensity = 0;
        state.emissiveMat.emissiveIntensity = state.baseEmissiveIntensity;
        if (state.emissiveMat.emissive) state.emissiveMat.emissive.copy(state.baseEmissive);
      }
    } else {
      // Cooldown countdown
      state.cooldownTimer -= 0.016;

      // Trigger if torch is on AND ROV is close enough AND cooldown elapsed
      if (doProximityCheck && torchActive && state.cooldownTimer <= 0) {
        const dist = _rovWorldPos.distanceTo(_cWorldPos);
        if (dist < TRIGGER_DIST) {
          state.flashing = true;
          state.timer = 0;
          state.duration = 0.45 + Math.random() * 0.4;
          // Pick a vivid flash colour per creature for variety
          const hue = Math.random();
          state.flashColor.setHSL(hue, 1.0, 0.65);
          state.light.color.copy(state.flashColor);
        }
      }
    }
  });
}

  // Creature animation — skip creatures more than CULL_Y units from camera
  if (updateCreaturesThisFrame) {
  allCreatures.forEach((c) => {
    const ud = c.userData;
    if (!ud || ud.zoneId === undefined) return;
    if (Math.abs(c.position.y - camY) > CULL_Y) return;
    c.position.y = ud.baseY + Math.sin(t * ud.floatSpeed + ud.floatOffset) * ud.floatAmp;
    c.position.x += ud.driftDir;
    if (Math.abs(c.position.x) > CUBE_W / 2 - 0.8) ud.driftDir *= -1;
    c.rotation.y += ud.rotSpeed;
    if (ud.isFish) {
      c.rotation.z = Math.sin(t * 2.2 + ud.wobblePhase) * 0.08;
    }
    // Manta ray wing flap — gentle soaring glide
    if (ud.isManta && ud.wingLeft && ud.wingRight) {
      const flap = Math.sin(t * 1.2 + ud.wobblePhase) * 0.18;
      ud.wingLeft.rotation.x  =  flap;
      ud.wingRight.rotation.x = -flap;
    }
    // Jellyfish bell pulse — rhythmic contraction like a real medusa
    if (ud.isJelly && ud.bellMesh) {
      // Two-speed pulse: quick squeeze then slow relaxation (asymmetric sine)
      const raw   = Math.sin(t * 1.8 + ud.wobblePhase);
      const pulse = raw > 0 ? raw * raw : raw * 0.3;   // sharp squeeze, gentle swell
      const scaleXZ = 1.0 + pulse * 0.12;              // radial expansion
      const scaleY  = 1.0 - pulse * 0.10;              // vertical flatten
      c.scale.set(scaleXZ, scaleY, scaleXZ);

      // Bioluminescent glow breathes in sync with each contraction
      if (ud.jellyMats) {
        // Base intensities per material layer — bell top, bell inner, arms, tentacles
        const baseEI = [0.45, 0.20, 0.55, 0.50];
        const glowPulse = 0.3 + 0.2 * Math.sin(t * 1.8 + ud.wobblePhase);
        ud.jellyMats.forEach((mat, mi) => {
          mat.emissiveIntensity = baseEI[mi] * glowPulse / 0.3;
        });
      }
    }

    // Firefly squid bioluminescent pulse — chromatic wave ripples through body + photophores
    if (ud.isSquid) {
      // Body glow: slow undulating breath (mantle + head + arms)
      const bodyGlow = 0.28 + 0.22 * Math.sin(t * 1.4 + ud.wobblePhase);
      if (ud.squidMats) {
        // mantleMat, mantleDarkMat, headMat — base 0.30 / 0.15 / 0.35
        const baseEI = [0.30, 0.15, 0.35, 0.55];
        ud.squidMats.forEach((mat, mi) => {
          mat.emissiveIntensity = baseEI[mi] * (bodyGlow / 0.28);
        });
      }
      // Photophore flash: faster, sharper pulse — bright white-blue bioluminescent sparkle
      if (ud.photoMat) {
        const photoFlash = 2.8 + 1.8 * Math.sin(t * 3.2 + ud.wobblePhase)
                                + 0.9 * Math.sin(t * 7.5 + ud.wobblePhase * 1.7);
        ud.photoMat.emissiveIntensity = Math.max(0.8, photoFlash);
      }
      // Iris glow — pulses with the body breath
      if (ud.eyeIrisMat) {
        ud.eyeIrisMat.emissiveIntensity = 1.2 + 1.0 * Math.sin(t * 1.4 + ud.wobblePhase + 0.6);
      }
      // Gentle mantle ripple: arms splay slightly in sync with glow pulse
      const splay = 1.0 + 0.04 * Math.sin(t * 1.4 + ud.wobblePhase);
      c.scale.set(splay, 1.0, splay);
    }
  });
}

  // Vertical light lines — very slow, subtle shimmer (throttled to every 4th frame)
  if (_frameCount % 4 === 0) {
    const slFade = zoneState.causticDepthFade;
    if (window._scanLineMeshes) {
      window._scanLineMeshes.forEach((m) => {
        const phase = m.userData.phaseOffset || 0;
        const pulse = 0.9 + 0.1 * Math.sin(t * 0.18 + phase);
        m.material.opacity = m.userData.baseOpacity * slFade * pulse;
        m.scale.x = 1 + 0.08 * Math.sin(t * 0.12 + phase);
      });
    }
    if (window._glowLineMeshes) {
      window._glowLineMeshes.forEach((g) => {
        const phase = g.userData.phaseOffset || 0;
        const pulse = 0.75 + 0.25 * Math.sin(t * 0.18 + phase);
        g.material.opacity = g.userData.baseOpacity * slFade * pulse;
        g.scale.x = 1 + 0.15 * Math.sin(t * 0.12 + phase);
      });
    }
  }

  // Caustics — only visible when ROV is near surface (zone 0)
  // Fade out as we descend so deep zones stay dark
  const causticFade = (1 - zoneState.torchBlend) * zoneState.causticDepthFade;
  causticMat.opacity = 0.07 * causticFade;

  // Throttle expensive per-pixel caustic canvas redraws to every 3rd frame (~20fps update)
  if (causticFade > 0.005 && _frameCount % 3 === 0) {
    drawCaustics(t);
  }

  // Ground caustics — throttled to every 3rd frame (same cadence)
  if (_frameCount % 3 === 0) drawGroundCaustics(t);
  gcausticTex.offset.x += 0.00015;
  gcausticTex.offset.y -= 0.0001;

  // Hydrothermal vent plumes — throttled to every 2nd frame
  if (_frameCount % 2 === 0) animateVentPlumes(t);

  // Particles (marine snow)
  if (_frameCount % 2 === 0) {
  const pPositions = particles.geometry.attributes.position.array;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pPositions[i * 3 + 1] -= pVel[i] * 0.4;
    pPositions[i * 3] += Math.sin(t * 0.3 + i) * 0.003;
    if (pPositions[i * 3 + 1] < -TOTAL_H) {
      pPositions[i * 3 + 1] = 0;
      pPositions[i * 3] = (Math.random() - 0.5) * CUBE_W;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * CUBE_D;
    }
  }
  particles.geometry.attributes.position.needsUpdate = true;
}

  // Nav rail live indicator
  updateNavRail();

  // Interaction Logic (Raycasting)
  if (_frameCount % 5 === 0) { // Throttled check for hover/selection readiness
    raycaster.setFromCamera(mouse, activeCamera);
  }

  // Smoothly lerp orbit cam target toward selected zone
  if (!rovCamActive) {
    controls.target.y += (targetControlsY - controls.target.y) * 0.06;
  }

  controls.update();

  // Parallax title code removed — #parallax-title has display:none so all
  // the mouse lerp, depth shift, orbit sway and style.transform writes were wasted

  // Update composer's render pass camera to match active camera (orbit or ROV)
  renderPass.camera = activeCamera;
  composer.render();
  
  if (watchdog) watchdog.update();
  
  _frameCount++;
}

// ─── Parallax Title Setup ─────────────────────────────────────────────────────
const _parallaxTitle = document.getElementById('parallax-title');
const _parallaxTitleMain = _parallaxTitle ? _parallaxTitle.querySelector('.title-main') : null;
const _parallaxTitleSub  = _parallaxTitle ? _parallaxTitle.querySelector('.title-sub')  : null;
const _parallaxMouse = { tx: 0, ty: 0, cx: 0, cy: 0 };

window.addEventListener('mousemove', (e) => {
  // Normalise to -1..1 from centre of viewport
  _parallaxMouse.tx = (e.clientX / window.innerWidth  - 0.5) * 2;
  _parallaxMouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
});

renderer.setAnimationLoop(animate);

// ─── Resize ───────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  rovCamera.aspect = window.innerWidth / window.innerHeight;
  rovCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  bloomPass.resolution.set(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2));
});
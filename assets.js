import * as THREE from 'three';

// --- Shared Helpers ---
function buildPart(vArr, idxArr, mat) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vArr), 3));
  geo.setIndex(idxArr);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, mat);
}

// --- Digital Entities ---

export function makeUserNode(type = 'user', labelText = 'User') {
  const group = new THREE.Group();
  
  // Outer shell (Pulse)
  const shellGeo = new THREE.IcosahedronGeometry(0.3, 1);
  const shellMat = new THREE.MeshPhongMaterial({
    color: type === 'hacker' ? 0xff0055 : (type === 'bot' ? 0x7c3aed : 0x00d4ff),
    transparent: true,
    opacity: 0.2,
    wireframe: true
  });
  const shell = new THREE.Mesh(shellGeo, shellMat);
  group.add(shell);

  // Core
  const coreGeo = new THREE.SphereGeometry(0.12, 16, 16);
  const coreMat = new THREE.MeshStandardMaterial({
    color: type === 'hacker' ? 0xff0055 : (type === 'bot' ? 0x7c3aed : 0x00d4ff),
    emissive: type === 'hacker' ? 0xff0055 : (type === 'bot' ? 0x7c3aed : 0x00d4ff),
    emissiveIntensity: 2
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  group.add(core);

  // Orbital rings
  const ringGeo = new THREE.TorusGeometry(0.4, 0.01, 8, 32);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  const ring2 = new THREE.Mesh(ringGeo, ringMat);
  ring2.rotation.x = Math.PI / 2;
  group.add(ring1, ring2);

  group.userData = { type: 'USER_NODE', nodeType: type, label: labelText, pulseSpeed: 0.5 + Math.random() };
  return group;
}

export function makeServerRack() {
  const group = new THREE.Group();
  
  const rackGeo = new THREE.BoxGeometry(1.2, 2.2, 1.2);
  const rackMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0f, metalness: 0.8, roughness: 0.2 });
  const rack = new THREE.Mesh(rackGeo, rackMat);
  group.add(rack);

  // Glowing slots
  for(let i = 0; i < 8; i++) {
    const slotGeo = new THREE.BoxGeometry(1.0, 0.1, 1.25);
    const slotMat = new THREE.MeshStandardMaterial({
      color: 0x00d4ff,
      emissive: 0x00d4ff,
      emissiveIntensity: 0.5 + Math.random()
    });
    const slot = new THREE.Mesh(slotGeo, slotMat);
    slot.position.y = -0.8 + i * 0.25;
    group.add(slot);
  }

  group.userData = { type: 'SERVER_RACK' };
  return group;
}

// --- Marine Life (Original assets moved here) ---

export function makeJellyfish(size = 1, color = 0x00d4ff) {
  const group = new THREE.Group();
  const headGeo = new THREE.SphereGeometry(size, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
  const headMat = new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.6, emissive: color, emissiveIntensity: 0.5 });
  const head = new THREE.Mesh(headGeo, headMat);
  group.add(head);

  // Tentacles
  for(let i = 0; i < 8; i++) {
    const tGeo = new THREE.CylinderGeometry(0.02 * size, 0.005 * size, 3 * size, 8);
    const tMat = new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.4 });
    const t = new THREE.Mesh(tGeo, tMat);
    const angle = (i / 8) * Math.PI * 2;
    t.position.set(Math.cos(angle) * 0.7 * size, -1.5 * size, Math.sin(angle) * 0.7 * size);
    group.add(t);
  }
  
  group.userData = { type: 'creature', creatureType: 'jellyfish', wobblePhase: Math.random() * Math.PI * 2 };
  return group;
}

// ... more marine assets can be added here as needed ...

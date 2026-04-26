export const VISUAL_CONFIG = {
  NV_FILTER: 'grayscale(1) sepia(1) hue-rotate(90deg) brightness(1.55) contrast(1.1)',
  NV_AMBIENT_BOOST: 2.5,
  NV_EMISSIVE_BOOST: 3.2,
  AMBIENT_NORMAL: 0.62,
  AMBIENT_DARK: 0.09,
  ROV_POINT_NORMAL: 2,
  ROV_POINT_DARK: 6.5,
  ROV_RANGE_NORMAL: 3,
  ROV_RANGE_DARK: 5.5,
  ROV_VIGNETTE_GRADIENT: `radial-gradient(circle at center, transparent 42%, rgba(0,20,40,0.3) 58%, rgba(0,0,0,0.45) 68%, rgba(0,0,0,0.82) 85%, rgba(0,0,0,0.96) 100%)`,
  NV_VIGNETTE_GRADIENT: `radial-gradient(circle at center, transparent 38%, rgba(0,8,0,0.25) 52%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.97) 100%)`
};

export const PHYSICS_CONFIG = {
  GRAVITY: -0.015,
  WATER_DRAG: 0.98,
  PARTICLE_COUNT: 2000
};

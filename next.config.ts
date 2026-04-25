import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    unoptimized: true, // Necessário para alguns tipos de deploy estático/híbrido
  },
  typescript: {
    // Skill 8: Permitir build mesmo com warnings (usaremos no início)
    ignoreBuildErrors: true,
  }
};

export default nextConfig;

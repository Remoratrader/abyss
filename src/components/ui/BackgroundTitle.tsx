'use client';

import React from 'react';

export default function BackgroundTitle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[-1]">
      <div className="relative">
        {/* Layer de Sombra Profunda */}
        <h1 className="text-[25vw] font-black text-black leading-none opacity-40 blur-2xl translate-y-4 translate-x-4">
          ABYSS
        </h1>
        
        {/* Layer de Glow Sutil */}
        <h1 className="absolute inset-0 text-[25vw] font-black text-emerald-900/10 leading-none blur-md">
          ABYSS
        </h1>
        
        {/* Layer Principal com Outline Tático */}
        <h1 className="absolute inset-0 text-[25vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent border-emerald-500/5 select-none"
            style={{ WebkitTextStroke: '1px rgba(16, 185, 129, 0.05)' }}>
          ABYSS
        </h1>
      </div>
    </div>
  );
}

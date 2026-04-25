'use client';

import { useState, useEffect } from 'react';
import { ABYSS_ZONES } from '@/config/abyss-data';
import Header from '@/components/ui/Header';
import Sidebar from '@/components/ui/Sidebar';
import InfoPanel from '@/components/ui/InfoPanel';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import DiagnosticOverlay from '@/components/ui/DiagnosticOverlay';
import AbyssScene from '@/components/canvas/AbyssScene';

const LoadingFallback = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050508] gap-6">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-[ping_2s_infinite]" />
      <div className="absolute inset-2 border border-emerald-500/40 rounded-full animate-[spin_3s_linear_infinite]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-emerald-500 font-mono animate-pulse uppercase tracking-[0.3em] text-sm">
        Inicializando Protocolo Abyss
      </div>
      <div className="text-[10px] text-emerald-500/30 font-mono uppercase tracking-widest">
        Carregando Camadas Volumétricas...
      </div>
    </div>
  </div>
);

export default function AbyssPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="h-screen w-full bg-[#050508] overflow-hidden relative">
      {/* Sistema de Diagnóstico (Watchdog) */}
      <DiagnosticOverlay />

      {/* Background Cinematográfico */}
      <BackgroundTitle />

      {/* Camada 3D */}
      <div className="absolute inset-0 z-0">
        {mounted ? <AbyssScene /> : <LoadingFallback />}
      </div>

      {/* Interface Tática (HUD) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto">
            <Header />
          </div>
          
          <div className="pointer-events-auto flex flex-col items-end gap-2">
            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-500 font-mono uppercase tracking-widest backdrop-blur-md">
              System Status: <span className="text-emerald-400">Secure</span>
            </div>
            <div className="text-[10px] text-white/30 font-mono uppercase">
              Terminal: /dev/tty0
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          <div className="pointer-events-auto">
            <Sidebar zones={ABYSS_ZONES} />
          </div>
          <div className="pointer-events-auto">
            <InfoPanel />
          </div>
        </div>
      </div>
      
      {/* Post-processing Overlays (Skill 1) */}
      {/* Vinheta */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Scanlines Estáticas */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00ff41_2px,#00ff41_4px)]" />
      
      {/* Noise e Textura Tática */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

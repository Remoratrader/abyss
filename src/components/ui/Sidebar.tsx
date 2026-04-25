import React from 'react';
import { AbyssZone } from '@/config/abyss-data';

interface SidebarProps {
  zones: AbyssZone[];
}

export default function Sidebar({ zones }: SidebarProps) {
  return (
    <div className="flex flex-col gap-6">
      {zones.map((zone, i) => (
        <button
          key={zone.id}
          className="group flex items-center gap-6 text-left transition-all hover:translate-x-3"
        >
          <div className="flex flex-col items-end min-w-[80px]">
            <span className="text-[9px] text-emerald-500/40 font-mono uppercase tracking-[0.2em]">
              Z-LAYER {i + 1}
            </span>
            <span className="text-sm font-bold text-white/80 uppercase font-orbitron group-hover:text-emerald-400 transition-colors tracking-widest">
              {zone.name}
            </span>
            <span className="text-[9px] text-slate-500 font-mono uppercase mt-1">
              {zone.depth}
            </span>
          </div>
          
          <div className="relative h-12 w-[2px] bg-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10" />
            {/* Indicador de Seleção */}
            <div className="absolute top-0 right-[-4px] w-1 h-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      ))}
    </div>
  );
}

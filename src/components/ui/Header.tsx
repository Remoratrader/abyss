import React from 'react';

export default function Header() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
          <span className="text-emerald-500 font-bold text-xs">S</span>
        </div>
        <h1 className="text-xl font-bold tracking-[0.3em] text-white uppercase font-orbitron">
          Abyss Explorer
        </h1>
      </div>
      <div className="text-[10px] text-emerald-500/50 font-mono tracking-widest uppercase">
        Serafim Web Intelligence Division // v1.0.4
      </div>
    </div>
  );
}

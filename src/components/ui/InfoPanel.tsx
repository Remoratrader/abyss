import React from 'react';

export default function InfoPanel() {
  return (
    <div className="w-80 bg-black/60 backdrop-blur-2xl border border-white/5 p-6 shadow-2xl relative overflow-hidden group">
      {/* Detalhe de Borda Decorativa */}
      <div className="absolute top-0 left-0 w-16 h-[1px] bg-emerald-500/50" />
      <div className="absolute top-0 left-0 w-[1px] h-16 bg-emerald-500/50" />
      
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex flex-col">
          <span className="text-[9px] text-emerald-500 font-mono uppercase tracking-[0.3em]">
            Forensic Audit
          </span>
          <span className="text-[8px] text-white/20 font-mono uppercase tracking-widest">
            Session ID: #SF-8892-X
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
        </div>
      </div>

      <div className="space-y-6 mt-4">
        <div>
          <h2 className="text-xs font-bold text-white/90 uppercase font-orbitron tracking-widest">
            Sonda de Profundidade
          </h2>
          <p className="text-[10px] text-slate-500 font-mono mt-3 leading-relaxed italic">
            "Mergulhando no vácuo binário para mapear a infraestrutura oculta da rede mundial."
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-slate-400">Integrity Check</span>
            <span className="text-emerald-400">99.98%</span>
          </div>
          <div className="w-full h-[2px] bg-white/5">
            <div className="w-[99%] h-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-1">
              <div className="text-[8px] text-slate-600 uppercase font-bold tracking-tighter">Signal Latency</div>
              <div className="text-sm font-bold text-blue-400/80 font-mono">14.2ms</div>
            </div>
            <div className="space-y-1 text-right">
              <div className="text-[8px] text-slate-600 uppercase font-bold tracking-tighter">Data Flux</div>
              <div className="text-sm font-bold text-emerald-400/80 font-mono">8.4GB/s</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-center">
          <div className="text-[8px] text-white/20 font-mono animate-pulse uppercase tracking-[0.4em]">
            Aguardando Input do Operador...
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function DiagnosticOverlay() {
  const [visible, setVisible] = useState(true); // Forçado true para debug
  const [logs, setLogs] = useState<{msg: string, type: 'info' | 'warn' | 'error'}[]>([]);

  const addLog = useCallback((msg: string, type: 'info' | 'warn' | 'error' = 'info') => {
    setLogs(prev => [...prev.slice(-15), { msg: `[${new Date().toLocaleTimeString()}] ${msg}`, type }]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Aceita Shift+D ou Shift+d
      if (e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        setVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    console.log = (...args) => {
      originalLog(...args);
      addLog(args.join(' '), 'info');
    };
    console.warn = (...args) => {
      originalWarn(...args);
      addLog(args.join(' '), 'warn');
    };
    console.error = (...args) => {
      originalError(...args);
      addLog(args.join(' '), 'error');
    };

    addLog("Watchdog em Modo de Emergência - Visível");
    addLog("--- CHECKPOINT SALVO ---", "warn");
    addLog("Motor 3D em Modo de Segurança (Safe-Core v1)");
    addLog("Pressione Shift + D para ocultar este painel.");

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, [addLog]);

  if (!visible) return (
    <div className="fixed bottom-4 right-4 text-[10px] text-emerald-500/20 font-mono">
      Shift + D for Diagnostics
    </div>
  );

  return (
    <div className="fixed top-24 right-6 z-[999] pointer-events-none w-80">
      <div className="bg-black/95 backdrop-blur-2xl border border-red-500/50 p-3 flex flex-col gap-2 shadow-2xl">
        <div className="flex justify-between items-center border-b border-red-500/20 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
            <span className="text-[10px] font-bold text-red-500 font-mono tracking-widest uppercase">
              DEBUG_EMERGENCY_MODE
            </span>
          </div>
        </div>

        <div className="h-80 overflow-hidden flex flex-col gap-1.5 py-1">
          {logs.map((log, i) => (
            <div key={i} className={`text-[9px] font-mono leading-tight ${
              log.type === 'error' ? 'text-red-400 font-bold' : 
              log.type === 'warn' ? 'text-yellow-400' : 
              'text-emerald-400/80'
            }`}>
              {`> ${log.msg}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

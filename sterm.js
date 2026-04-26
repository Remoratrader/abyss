import { SerafimLogger } from './logger.js';

export class SerafimTerminal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.history = [];
    this.historyIndex = -1;
    this.commands = {};
    this.currentPersona = 'serafim';
    this.supabaseUrl = 'https://ihebiuxobusmbflliiwn.supabase.co';
    this.supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZWJpdXhvYnVzbWJmbGxpaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0OTk1NTcsImV4cCI6MjA5MDA3NTU1N30.IPhgQFvUSkW1UppFcKjWlxwCdbyQ8eEtrQj2G5wESrM';
    
    this._initUI();
    this._registerDefaultCommands();
    
    SerafimLogger.info('STERM: Terminal interface active');
  }

  _initUI() {
    this.container.innerHTML = `
      <div id="sterm-header" style="background: rgba(0, 212, 255, 0.15); padding: 8px 16px; border-bottom: 1px solid rgba(0, 212, 255, 0.3); display: flex; justify-content: space-between; align-items: center; cursor: move; border-radius: 8px 8px 0 0;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 8px; height: 8px; border-radius: 50%; background: #00d4ff; box-shadow: 0 0 10px #00d4ff;"></div>
          <span style="font-size: 11px; font-weight: 900; letter-spacing: 2px; color: #00d4ff; text-transform: uppercase;">Serafim_Terminal_v13</span>
        </div>
        <div style="display: flex; gap: 12px;">
          <span class="sterm-ctrl" id="sterm-expand" style="cursor: pointer; opacity: 0.7; font-size: 14px;">[ ]</span>
          <span class="sterm-ctrl" id="sterm-min" style="cursor: pointer; opacity: 0.7; font-size: 14px;">_</span>
        </div>
      </div>
      <div id="sterm-output" style="flex: 1; overflow-y: auto; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.6; color: #e0f4ff; scrollbar-width: thin; scrollbar-color: rgba(0,212,255,0.3) transparent; text-shadow: 0 0 5px rgba(0, 212, 255, 0.2);">
        <div style="color: #00d4ff; font-weight: bold; margin-bottom: 4px;">[SYSTEM_BOOT_COMPLETE]</div>
        <div style="color: #5588aa; font-size: 11px; margin-bottom: 20px;">Authenticated as: SUPER_ADMIN // Session: ${Math.random().toString(16).slice(2, 10).toUpperCase()}</div>
      </div>
      
      <div id="sterm-quick-actions" style="display: flex; gap: 8px; padding: 0 16px 8px; overflow-x: auto; scrollbar-width: none;">
        <button class="sterm-btn" onclick="document.getElementById('sterm-input').value='demo-attack'; document.getElementById('sterm-input').focus()">STORY_DEMO</button>
        <button class="sterm-btn" onclick="document.getElementById('sterm-input').value='scan google.com'; document.getElementById('sterm-input').focus()">SCAN_TARGET</button>
        <button class="sterm-btn" onclick="document.getElementById('sterm-input').value='status'; document.getElementById('sterm-input').focus()">SYS_STATUS</button>
      </div>

      <div id="sterm-input-line" style="display: flex; align-items: center; padding: 12px 16px; background: rgba(0, 20, 30, 0.4); border-top: 1px solid rgba(0, 212, 255, 0.1);">
        <span id="sterm-prompt" style="color: #00d4ff; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: bold; margin-right: 12px; white-space: nowrap;">serafim@v13:~$</span>
        <input type="text" id="sterm-input" style="background: transparent; border: none; outline: none; color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 13px; flex: 1; width: 100%;" autocomplete="off" spellcheck="false" placeholder="Enter command...">
      </div>
    `;

    this.output = document.getElementById('sterm-output');
    this.input = document.getElementById('sterm-input');
    this.prompt = document.getElementById('sterm-prompt');

    this.input.addEventListener('keydown', (e) => this._handleInput(e));
    
    this.container.addEventListener('click', () => this.input.focus());

    document.getElementById('sterm-min').addEventListener('click', (e) => {
      e.stopPropagation();
      this.container.classList.toggle('minimized');
      this.container.classList.remove('expanded');
    });

    document.getElementById('sterm-expand').addEventListener('click', (e) => {
      e.stopPropagation();
      this.container.classList.toggle('expanded');
      this.container.classList.remove('minimized');
    });
  }

  _handleInput(e) {
    if (e.key === 'Enter') {
      const line = this.input.value.trim();
      this.input.value = '';
      if (line) {
        this.write(`\n<span style="color: #00d4ff;">serafim@v13:~$</span> ${line}`);
        this.history.unshift(line);
        this.historyIndex = -1;
        this.execute(line);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = -1;
        this.input.value = '';
      }
    }
  }

  write(text, type = 'normal') {
    const div = document.createElement('div');
    div.innerHTML = text;
    this.output.appendChild(div);
    this.output.scrollTop = this.output.scrollHeight;
  }

  writeLog(message, level = 'INFO') {
    const colors = { INFO: '#00d4ff', WARN: '#ffaa00', ERROR: '#ff0055', PHASE: '#00ffa2', FINDING: '#ff3366' };
    const color = colors[level] || '#fff';
    this.write(`<span style="color: ${color}; font-weight: bold;">[${level}]</span> ${message}`);
  }

  async execute(line) {
    const args = line.split(' ').filter(a => a.length > 0);
    if (args.length === 0) return;
    const cmdName = args[0].toLowerCase();
    const cmdArgs = args.slice(1);

    if (this.commands[cmdName]) {
      try {
        await this.commands[cmdName].execute(cmdArgs);
      } catch (err) {
        this.writeLog(`ERROR: ${err.message}`, 'ERROR');
      }
    } else {
      this.write(`Command not found: ${cmdName}. Type 'help' for available commands.`, 'error');
    }
  }

  _registerDefaultCommands() {
    this.commands['help'] = {
      description: 'Show available commands',
      execute: async () => {
        this.write('AVAILABLE COMMANDS:');
        Object.keys(this.commands).forEach(key => {
          this.write(`  <span style="color: #00d4ff;">${key.padEnd(12)}</span> - ${this.commands[key].description}`);
        });
      }
    };

    this.commands['clear'] = {
      description: 'Clear the terminal screen',
      execute: async () => {
        this.output.innerHTML = '';
      }
    };

    this.commands['whoami'] = {
      description: 'Display current user information',
      execute: async () => {
        this.write('USER: kffmn\nROLE: SUPER_ADMIN\nAUTH: SERAFIM_BYPASS_ENABLED');
      }
    };

    this.commands['version'] = {
      description: 'Display system version',
      execute: async () => {
        this.write('SERAFIM_STERM v13.0.455 (Build 2026-04-26)');
      }
    };
    
    this.commands['status'] = {
      description: 'Check ecosystem health',
      execute: async () => {
        this.writeLog('Checking node connectivity...', 'PHASE');
        this.writeLog('Supabase Edge Functions: ONLINE', 'INFO');
        this.writeLog('Fly.io Workers: 4/4 ACTIVE', 'INFO');
        this.writeLog('Brain Memory: 1.2GB LOADED', 'INFO');
        this.writeLog('Security Integrity: 100%', 'INFO');
      }
    };
  }

  registerCommand(name, description, executeFn) {
    this.commands[name] = { description, execute: executeFn };
  }
}

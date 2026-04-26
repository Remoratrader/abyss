export const SerafimLogger = {
  logs: [],
  maxLogs: 100,
  
  info(msg, data = {}) {
    this._add('INFO', msg, data);
  },
  
  warn(msg, data = {}) {
    this._add('WARN', msg, data);
  },
  
  error(msg, data = {}) {
    this._add('ERROR', msg, data);
  },
  
  audit(action, details = {}) {
    this._add('AUDIT', action, details);
  },
  
  _add(level, message, data) {
    const log = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data
    };
    this.logs.unshift(log);
    if (this.logs.length > this.maxLogs) this.logs.pop();
    
    const colors = {
      INFO: '#00d4ff',
      WARN: '#ffaa00',
      ERROR: '#ff0055',
      AUDIT: '#7c3aed'
    };
    const color = colors[level] || '#ffffff';
    console.log(`%c[SERAFIM_${level}] %c${message}`, `color: ${color}; font-weight: bold; background: #0a0a0f; padding: 2px 4px;`, 'color: #c8e8ff', data);
  }
};

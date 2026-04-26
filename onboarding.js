import { SerafimLogger } from './logger.js';

export class SerafimOnboarding {
  constructor() {
    this.steps = [
      {
        target: 'sterm-container',
        title: 'Terminal Tático (STERM)',
        content: 'Aqui você executa comandos reais. Tente clicar em SCAN_TARGET para iniciar um diagnóstico forense.',
        position: 'top-left'
      },
      {
        target: 'serafim-watchdog-overlay',
        title: 'Watchdog Engine',
        content: 'Monitore a saúde do sistema e performance em tempo real. Qualquer anomalia será registrada aqui.',
        position: 'top-right'
      },
      {
        target: 'sterm-quick-actions',
        title: 'Storytelling Digital',
        content: 'Clique em STORY_DEMO para ver uma simulação completa de invasão e como a nossa Blindagem bloqueia ataques em tempo real.',
        position: 'top-left'
      },
      {
        target: 'rov-core-btn',
        title: 'ROV Cam & Navegação',
        content: 'Alterne a câmera para dentro do ROV ou use a barra de profundidade para navegar manualmente.',
        position: 'top-center'
      }
    ];
    this.currentStep = 0;
    this._initUI();
  }

  _initUI() {
    const overlay = document.createElement('div');
    overlay.id = 'serafim-onboarding-overlay';
    overlay.style = `
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 10000;
      display: none;
      pointer-events: none;
      transition: opacity 0.5s;
    `;
    document.body.appendChild(overlay);

    const tooltip = document.createElement('div');
    tooltip.id = 'serafim-onboarding-tooltip';
    tooltip.style = `
      position: fixed;
      width: 320px;
      background: rgba(10, 10, 15, 0.95);
      border: 1px solid #00d4ff;
      border-radius: 8px;
      padding: 20px;
      color: #fff;
      font-family: 'Inter', sans-serif;
      z-index: 10001;
      display: none;
      box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
      pointer-events: auto;
    `;
    tooltip.innerHTML = `
      <div id="ob-title" style="color: #00d4ff; font-weight: bold; margin-bottom: 8px; font-size: 14px; letter-spacing: 1px;"></div>
      <div id="ob-content" style="font-size: 13px; color: #a0aec0; line-height: 1.6; margin-bottom: 16px;"></div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span id="ob-step" style="font-size: 10px; color: #555;">Step 1 of 4</span>
        <button id="ob-next" style="background: #00d4ff; color: #000; border: none; padding: 6px 16px; border-radius: 4px; font-size: 12px; font-weight: bold; cursor: pointer;">PRÓXIMO</button>
      </div>
    `;
    document.body.appendChild(tooltip);

    document.getElementById('ob-next').addEventListener('click', () => this.next());
  }

  start() {
    if (localStorage.getItem('serafim_onboarding_complete')) return;
    this.currentStep = 0;
    this.showStep();
    SerafimLogger.info('ONBOARDING: Guided tour started');
  }

  showStep() {
    const step = this.steps[this.currentStep];
    const targetEl = document.getElementById(step.target);
    const tooltip = document.getElementById('serafim-onboarding-tooltip');
    const overlay = document.getElementById('serafim-onboarding-overlay');

    if (!targetEl) {
      this.next();
      return;
    }

    overlay.style.display = 'block';
    tooltip.style.display = 'block';

    document.getElementById('ob-title').textContent = step.title;
    document.getElementById('ob-content').textContent = step.content;
    document.getElementById('ob-step').textContent = `Passo ${this.currentStep + 1} de ${this.steps.length}`;

    const rect = targetEl.getBoundingClientRect();
    
    if (step.position === 'top-left') {
      tooltip.style.top = (rect.bottom + 20) + 'px';
      tooltip.style.left = rect.left + 'px';
    } else if (step.position === 'top-center') {
      tooltip.style.top = (rect.bottom + 20) + 'px';
      tooltip.style.left = (rect.left + rect.width/2 - 160) + 'px';
    } else if (step.position === 'top-right') {
      tooltip.style.top = (rect.bottom + 20) + 'px';
      tooltip.style.right = (window.innerWidth - rect.right) + 'px';
      tooltip.style.left = 'auto';
    } else {
      tooltip.style.top = (rect.bottom + 20) + 'px';
      tooltip.style.left = (rect.left + rect.width/2 - 160) + 'px';
    }

    targetEl.style.boxShadow = '0 0 0 9999px rgba(0,0,0,0.7), 0 0 20px #00d4ff';
    targetEl.style.zIndex = '10001';
    targetEl.style.position = 'fixed';
  }

  next() {
    const prevStep = this.steps[this.currentStep];
    const prevTarget = document.getElementById(prevStep.target);
    if (prevTarget) {
      prevTarget.style.boxShadow = '';
      prevTarget.style.zIndex = '';
      prevTarget.style.position = '';
    }

    this.currentStep++;
    if (this.currentStep < this.steps.length) {
      this.showStep();
    } else {
      this.finish();
    }
  }

  finish() {
    document.getElementById('serafim-onboarding-tooltip').style.display = 'none';
    document.getElementById('serafim-onboarding-overlay').style.display = 'none';
    localStorage.setItem('serafim_onboarding_complete', 'true');
    SerafimLogger.info('ONBOARDING: Complete');
  }
}

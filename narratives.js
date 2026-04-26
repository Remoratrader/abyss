export const translations = {
  pt: {
    title: 'Monitor de Camadas Digitais',
    subtitle: 'Visualização forense de profundidade cibernética',
    surface: 'Camada de Superfície',
    midnight: 'Zona de Penumbra',
    abyss: 'Abismo Digital',
    trench: 'Trincheira de Infraestrutura'
  },
  en: {
    title: 'Digital Layer Monitor',
    subtitle: 'Forensic visualization of cyber depth',
    surface: 'Surface Layer',
    midnight: 'Twilight Zone',
    abyss: 'Digital Abyss',
    trench: 'Infrastructure Trench'
  }
};

export const labels = {
  pt: {
    modalType: 'INTELIGÊNCIA FORENSE // SCAN DE ENTIDADE',
    attack: 'O ATAQUE (PERSPECTIVA DO CRIMINOSO)',
    defense: 'A DEFESA (PROTOCOLO SERAFIM)',
    close: 'FECHAR',
    rovCam: '📹 Câmera ROV'
  },
  en: {
    modalType: 'FORENSIC INTELLIGENCE // ENTITY SCAN',
    attack: 'THE ATTACK (SCAMMER PERSPECTIVE)',
    defense: 'THE DEFENSE (SERAFIM PROTOCOL)',
    close: 'CLOSE',
    rovCam: '📹 ROV Cam'
  }
};

export const creatureNarratives = {
  pt: {
    'USER_NODE': {
      title: 'Usuário Civil (Vulnerável)',
      attack: 'Captura de credenciais via Phishing ou Session Hijacking.',
      defense: 'Autenticação multifator (MFA) e Blindagem de Sessão.'
    },
    'BOT_NODE': {
      title: 'Crawler Automatizado',
      attack: 'Varredura massiva em busca de diretórios expostos e vulnerabilidades conhecidas.',
      defense: 'Implementação de WAF com Rate Limiting e detecção de anomalias.'
    },
    'HACKER_NODE': {
      title: 'Agente de Ameaça (APT)',
      attack: 'Exploração de Zero-Day e movimento lateral para escalonamento de privilégios.',
      defense: 'Zero Trust Architecture e monitoramento de comportamento em tempo real.'
    },
    'SERVER_RACK': {
      title: 'Infraestrutura de Dados',
      attack: 'Injeção de código (RCE) para exfiltração de base de dados.',
      defense: 'Hardening de servidor e criptografia de dados em repouso.'
    }
  },
  en: {
    'USER_NODE': {
      title: 'Civilian User (Vulnerable)',
      attack: 'Credential harvesting via Phishing or Session Hijacking.',
      defense: 'Multi-factor authentication (MFA) and Session Shielding.'
    },
    'BOT_NODE': {
      title: 'Automated Crawler',
      attack: 'Massive scanning for exposed directories and known vulnerabilities.',
      defense: 'WAF implementation with Rate Limiting and anomaly detection.'
    },
    'HACKER_NODE': {
      title: 'Threat Agent (APT)',
      attack: 'Zero-Day exploitation and lateral movement for privilege escalation.',
      defense: 'Zero Trust Architecture and real-time behavioral monitoring.'
    },
    'SERVER_RACK': {
      title: 'Data Infrastructure',
      attack: 'Remote Code Execution (RCE) for database exfiltration.',
      defense: 'Server hardening and encryption of data at rest.'
    }
  }
};

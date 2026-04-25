export interface AbyssZone {
  id: number;
  name: string;
  depth: string;
  color: string;
  emissive: string;
  title: string;
  description: string;
  entities: { name: string; type: 'site' | 'data' | 'threat' | 'badge'; icon?: string }[];
}

export const ABYSS_ZONES: AbyssZone[] = [
  {
    id: 0,
    name: 'Surface Web',
    depth: '0 - 200m',
    color: '#1f8fc8',
    emissive: '#126fb0',
    title: 'Surface Web (Epipelagic)',
    description: 'A camada visível e indexada da internet. Onde a maioria dos usuários navega diariamente sob vigilância constante.',
    entities: [
      { name: 'Google Search', type: 'site' },
      { name: 'Social Networks', type: 'site' },
      { name: 'E-commerce Hubs', type: 'site' },
      { name: 'Public Metadata', type: 'data' }
    ]
  },
  {
    id: 1,
    name: 'Deep Web',
    depth: '200 - 1000m',
    color: '#21427d',
    emissive: '#13295a',
    title: 'Deep Web (Mesopelagic)',
    description: 'Onde residem os dados privados: bancos de dados corporativos, intranets e arquivos protegidos por senha. Não é ilegal, mas é oculta aos motores de busca.',
    entities: [
      { name: 'SQL Databases', type: 'data' },
      { name: 'Private Networks', type: 'data' },
      { name: 'Academic Records', type: 'data' },
      { name: 'Cloud Backups', type: 'data' }
    ]
  },
  {
    id: 2,
    name: 'Dark Web',
    depth: '1000 - 4000m',
    color: '#0a0a0f',
    emissive: '#171a52',
    title: 'Dark Web (Bathypelagic)',
    description: 'Redes sobrepostas que exigem software específico (Tor/I2P) para acesso. O território do anonimato radical e das operações táticas.',
    entities: [
      { name: 'Tor Exit Nodes', type: 'threat' },
      { name: 'Onion Services', type: 'site' },
      { name: 'Encrypted Comms', type: 'data' },
      { name: 'Serafim Shield', type: 'badge' }
    ]
  }
];

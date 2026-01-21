export interface BTCSite {
  id: string
  name: string
  description: string
  history: string
  type: 'fortress' | 'temple' | 'archaeological' | 'artisan' | 'gastronomy'
  xpReward: number
  visited: boolean
  isLocal?: boolean
  audioUrl: string
  arTargetIndex: number

  // 🔑 OBLIGATORIO PARA MAPA REAL
  lat: number
  lng: number
}

export const btcSites: BTCSite[] = [
  {
    id: 'sacsayhuaman',
    name: 'Sacsayhuamán',
    type: 'fortress',
    description:
      'Sacsayhuamán es una imponente fortaleza ceremonial inca construida con enormes bloques de piedra ensamblados con precisión milimétrica.',
    history:
      'Fue uno de los centros ceremoniales más importantes del Imperio Inca y escenario del Inti Raymi.',
    xpReward: 200,
    visited: false,
    lat: -13.5099,
    lng: -71.9817,
    audioUrl: '/audio/sacsayhuaman.mp3',
    arTargetIndex: 0

  },
   {
    id: 'qorikancha',
    name: 'Qorikancha',
    type: 'temple',
    description:
      'El Qorikancha fue el templo más sagrado del Imperio Inca, dedicado al culto del Sol.',
    history:
      'Sus muros estuvieron recubiertos de láminas de oro, simbolizando la conexión directa con Inti.',
    xpReward: 150,
    visited: false,
    lat: -13.5167,
    lng: -71.9786,
    audioUrl: '/audio/qorikancha.mp3',
    arTargetIndex: 1
  },
  {
    id: 'san_blas',
    name: 'Barrio de San Blas',
    type: 'temple',
    description: 'Centro artesanal vivo de Cusco.',
    xpReward: 80,
    visited: false,
    isLocal: true,
    lat: -13.5167,
    lng: -71.9786,
    audioUrl: '/audio/qorikancha.mp3',
    arTargetIndex: 2,
    history: ""
  },
  {
    id: 'mercado_san_pedro',
    name: 'Mercado San Pedro',
    description: 'Gastronomía y economía local en su máxima expresión.',
    type: 'gastronomy',
    xpReward: 100,
    visited: false,
    isLocal: true,
    lat: -13.52098,
    lng: -71.97542,
    history: "",
    audioUrl: "",
    arTargetIndex: 3,
  }
]

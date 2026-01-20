export interface BTCSite {
  id: string
  name: string
  description: string
  type: 'fortress' | 'temple' | 'archaeological' | 'artisan' | 'gastronomy'
  xpReward: number
  visited: boolean
  isLocal?: boolean

  // 🔑 OBLIGATORIO PARA MAPA REAL
  lat: number
  lng: number
}

export const btcSites: BTCSite[] = [
  {
    id: 'sacsayhuaman',
    name: 'Sacsayhuamán',
    description: 'Fortaleza ceremonial y símbolo del poder inca.',
    type: 'fortress',
    xpReward: 120,
    visited: false,
    isLocal: true,
    lat: -13.50978,
    lng: -71.98138
  },
  {
    id: 'qorikancha',
    name: 'Qorikancha',
    description: 'Templo del Sol, corazón espiritual del imperio.',
    type: 'temple',
    xpReward: 150,
    visited: true,
    lat: -13.52264,
    lng: -71.96734
  },
  {
    id: 'san_blas',
    name: 'Barrio de San Blas',
    description: 'Centro artesanal vivo de Cusco.',
    type: 'artisan',
    xpReward: 80,
    visited: false,
    isLocal: true,
    lat: -13.51662,
    lng: -71.96457
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
    lng: -71.97542
  }
]

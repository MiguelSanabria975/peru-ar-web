import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

/*  CSS CORE DE IONIC (CRÍTICO) */
import '@ionic/react/css/core.css'

/*  CSS ESTRUCTURAL (CRÍTICO) */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* CSS UTILITARIOS */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Variables de tema */
import './theme/variables.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

serviceWorkerRegistration.unregister()
reportWebVitals()

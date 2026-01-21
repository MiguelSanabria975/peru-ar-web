import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactHashRouter } from '@ionic/react-router'

import Home from './pages/Home'
import Map from './pages/Map'
import Passport from './pages/Passport'
import Escaner from './pages/Escaner'
import Perfil from './pages/Perfil'
import Site from './pages/Site'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactHashRouter>
      <IonRouterOutlet animated={false}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/site/:id" component={Site} />
        <Route exact path="/passport" component={Passport} />
        <Route exact path="/escaner" component={Escaner} />
        <Route exact path="/perfil" component={Perfil} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactHashRouter>
  </IonApp>
)

export default App

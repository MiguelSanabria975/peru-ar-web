import Page from '../components/Page'
import {
  IonButton,
  IonIcon,
} from '@ionic/react'
import {
  mapOutline,
  ribbonOutline,
  trailSignOutline,
  leafOutline
} from 'ionicons/icons'

import './Home.css'

const Home = () => {
  return (
    <Page>
      <div className="home-container">

        {/* ICONO CENTRAL (MUISCA / SIMBÓLICO) */}
        <div className="home-icon">
          <IonIcon icon={leafOutline} />
        </div>

        {/* TÍTULOS */}
        <h1 className="home-title">Explora Cusco</h1>

        <p className="home-subtitle">
          Patrimonio Vivo del mundo
        </p>

        <h2 className="home-quote">
          Cada piedra guarda una historia. Cada camino, un conocimiento ancestral
        </h2>

        <p className="home-description">
          Descubre los secretos del imperio Inca en un viaje digital que honra el pasado mientras construye el presente
        </p>

        {/* BOTONES CUADRADOS */}
        <div className="home-features">

          <div className="feature-card">
            <IonIcon icon={mapOutline} />
            <span>Mapa vivo<br />GPS en tiempo real</span>
          </div>

          <div className="feature-card">
            <IonIcon icon={ribbonOutline} />
            <span>Sellos sagrados<br />Colección de logros</span>
          </div>

          <div className="feature-card">
            <IonIcon icon={trailSignOutline} />
            <span>Rutas temáticas<br />Inca · Gastro · Arte</span>
          </div>

        </div>

        {/* IMPACTO LOCAL (HOVER SIN ANIMACIÓN) */}
        <div className="home-impact">
          <span className="impact-title">Impacto local</span>
          <p>
            Tu visita apoya a artesanos, mercados y comunidades cusqueñas
          </p>
        </div>

        {/* BOTONES FINALES */}
        <div className="home-actions">
          <IonButton expand="block" routerLink="/map">
            Camino sagrado
          </IonButton>

          <IonButton expand="block" fill="outline">
            Escanear Boleto Turístico (BTC)
          </IonButton>
        </div>

      </div>
    </Page>
  )
}

export default Home

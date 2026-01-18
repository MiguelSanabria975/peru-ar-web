import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonProgressBar
} from '@ionic/react'

import { IonButton } from '@ionic/react'
import { useHistory } from 'react-router'

import {
  compassOutline,
  sunnyOutline,
  trailSignOutline,
  leafOutline,
  restaurantOutline,
  shieldCheckmarkOutline,
  checkmarkCircleOutline,
  helpCircleOutline,
  mapOutline,
  trophyOutline
} from 'ionicons/icons'

import './Passport.css'

const Passport: React.FC = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pasaporte del Explorador</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="passport-content">

        {/* TARJETA PRINCIPAL */}
        <div className="passport-card hero">
          <IonIcon icon={compassOutline} className="hero-icon" />

          <h2>Pasaporte del Explorador</h2>
          <p className="hero-quote">
            Tu viaje es un homenaje a quienes caminaron antes
          </p>

          <div className="hero-badge">
            <IonIcon icon={sunnyOutline} />
            Explorador Activo
          </div>
        </div>

        {/* CAMINO SAGRADO */}
        <div className="passport-card">
          <div className="card-header">
            <h3>Camino Sagrado</h3>
            <span className="card-badge">2 / 8 Caminos honrados</span>
          </div>

          <IonProgressBar value={0.25} />

          <p className="card-hint">
            Cada paso te acerca más al conocimiento ancestral...
          </p>
        </div>

        {/* CATEGORÍAS */}
        <div className="passport-card">
          <h3>Categorías de sellos</h3>

          <div className="categories">
            <div className="category">
              <IonIcon icon={leafOutline} />
              <span>Cultura Viva</span>
              <small>3 sellos</small>
            </div>

            <div className="category">
              <IonIcon icon={restaurantOutline} />
              <span>Sabores del Cusco</span>
              <small>1 sello</small>
            </div>

            <div className="category">
              <IonIcon icon={shieldCheckmarkOutline} />
              <span>Guardianes del Patrimonio</span>
              <small>2 sellos</small>
            </div>
          </div>
        </div>

        {/* SELLOS COLECCIONADOS */}
        <div className="passport-card">
          <h3>Sellos sagrados coleccionados</h3>

          <div className="seal-card">
            <IonIcon icon={trailSignOutline} className="seal-icon" />
            <div className="seal-info">
              <strong>Ruta del Qhapaq Ñan</strong>
              <small>Adquirido · 12 Jul 2024</small>
            </div>
            <IonIcon icon={checkmarkCircleOutline} className="seal-check" />
          </div>

          <div className="seal-card">
            <IonIcon icon={leafOutline} className="seal-icon" />
            <div className="seal-info">
              <strong>Ritual Andino</strong>
              <small>Adquirido · 18 Jul 2024</small>
            </div>
            <IonIcon icon={checkmarkCircleOutline} className="seal-check" />
          </div>
        </div>

        {/* PRÓXIMOS SITIOS SAGRADOS */}
<div className="passport-card">
  <h3>Próximos Sitios Sagrados</h3>
  <p className="section-subtitle">
    Cada lugar te espera con un conocimiento ancestral único
  </p>

  <div className="sites-grid">
    {[
      'Sacsayhuamán',
      'Qorikancha',
      'Pisac',
      'Ollantaytambo',
      'Moray',
      'Chinchero'
    ].map((site) => (
      <div className="site-card" key={site}>
        <IonIcon icon={helpCircleOutline} />
        <span>{site}</span>
      </div>
    ))}
  </div>
</div>

{/* ACCIONES FINALES */}
<div className="passport-actions">
  <IonButton expand="block" onClick={() => history.push('/map')}>
    <IonIcon slot="start" icon={mapOutline} />
    Ir al Mapa
  </IonButton>

  <IonButton expand="block" fill="outline">
    <IonIcon slot="start" icon={trophyOutline} />
    Ver Logros y Recompensas
  </IonButton>
</div>

      </IonContent>
    </IonPage>
  )
}

export default Passport

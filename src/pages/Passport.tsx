import React from 'react'

import {
  IonContent,
  IonIcon,
  IonText,
  IonButton
} from '@ionic/react'

import {
  personCircleOutline,
  flash,
  mapOutline,
  checkmarkCircle,
  lockClosed,
  shareSocialOutline
} from 'ionicons/icons'

import Page from '../components/Page'
import './Passport.css'

const Passport = () => {
  return (
    <Page title="Pasaporte del explorador">
      <IonContent fullscreen className="profile-content">

        {/* TARJETA PRINCIPAL */}
        <div className="profile-card main-profile-card">
          <div className="profile-header">
            <IonIcon
              icon={personCircleOutline}
              className="profile-main-icon"
            />

            <div>
              <IonText>
                <h2>Pasaporte del explorador</h2>
              </IonText>
              <p className="profile-subtitle">
                Explorador del Patrimonio Vivo
              </p>
            </div>
          </div>

          <div className="profile-meta">
            <span>Pasaporte activo</span>
            <span>•</span>
            <span>BTC Premium</span>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="profile-card">
          <IonText>
            <h3>Progreso</h3>
          </IonText>

          <div className="stats-grid">
            <div className="stat-card">
              <IonIcon icon={flash} className="stat-icon warning" />
              <strong>120 XP</strong>
              <span>Experiencia</span>
            </div>

            <div className="stat-card">
              <IonIcon icon={mapOutline} className="stat-icon primary" />
              <strong>3 / 10</strong>
              <span>Sitios</span>
            </div>
          </div>
        </div>

        {/* SELLLOS SAGRADOS */}
        <div className="profile-card">
          <IonText>
            <h3>Sellos Sagrados</h3>
          </IonText>

          <div className="achievement-card unlocked">
            <IonIcon icon={checkmarkCircle} />
            <div>
              <strong>Qoricancha</strong>
              <p>Templo del Sol</p>
            </div>
            <IonIcon icon={checkmarkCircle} className="status-icon" />
          </div>

          <div className="achievement-card locked">
            <IonIcon icon={lockClosed} />
            <div>
              <strong>Sacsayhuamán</strong>
              <p>Fortaleza ceremonial</p>
            </div>
            <IonIcon icon={lockClosed} className="status-icon" />
          </div>
        </div>

        {/* COMPARTIR */}
        <div className="profile-card share-card">
          <IonIcon icon={shareSocialOutline} className="share-icon" />
          <IonText>
            <h3>Comparte tu camino</h3>
          </IonText>
          <p>
            Muestra tu progreso y apoya el turismo cultural responsable.
          </p>
        </div>

        {/* ACCIONES */}
        <div className="profile-actions">
          <IonButton expand="block" routerLink="/map">
            Volver al Mapa
          </IonButton>

          <IonButton expand="block" fill="outline" routerLink="/perfil">
            Ver logros y recompensas
          </IonButton>
        </div>

      </IonContent>
    </Page>
  )
}

export default Passport

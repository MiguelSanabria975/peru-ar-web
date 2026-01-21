import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonButtons
} from '@ionic/react'

import {
  arrowBack,
  trophyOutline,
  ribbonOutline,
  mapOutline,
  timeOutline,
  walkOutline,
  cameraOutline,
  checkmarkCircle,
  lockClosed,
  shareSocialOutline,
  compassOutline
} from 'ionicons/icons'

import { useIonRouter } from '@ionic/react'
import './Perfil.css'

const Perfil: React.FC = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonButton onClick={() => router.push('/home')}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Mi Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="profile-content, page-light" >

        {/* TARJETA PRINCIPAL */}
        <div className="profile-card main-profile-card">
          <div className="profile-header">
            <IonIcon icon={trophyOutline} className="profile-main-icon" />
            <div>
              <h2>Explorador Digital</h2>
              <p className="profile-subtitle">
                Aventurero del patrimonio mundial
              </p>
            </div>
          </div>

          <div className="profile-meta">
            <span>Nivel 1</span>
            <span>•</span>
            <span>2 Insignias</span>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="profile-card">
          <h3>Estadísticas de Exploración</h3>

          <div className="stats-grid">
            <div className="stat-card">
              <IonIcon icon={mapOutline} className="stat-icon primary" />
              <strong>2/8</strong>
              <span>Sitios visitados</span>
            </div>

            <div className="stat-card">
              <IonIcon icon={timeOutline} className="stat-icon secondary" />
              <strong>4.5 h</strong>
              <span>Tiempo explorando</span>
            </div>

            <div className="stat-card">
              <IonIcon icon={walkOutline} className="stat-icon success" />
              <strong>5.2 km</strong>
              <span>Distancia caminada</span>
            </div>

            <div className="stat-card">
              <IonIcon icon={cameraOutline} className="stat-icon warning" />
              <strong>8</strong>
              <span>Fotos compartidas</span>
            </div>
          </div>
        </div>

        {/* INSIGNIAS */}
        <div className="profile-card">
          <h3>Insignias y Logros</h3>

          <div className="achievement-card unlocked">
            <IonIcon icon={ribbonOutline} />
            <div>
              <strong>Primer Explorador</strong>
              <p>Visitaste tu primer sitio turístico</p>
              <small>Desbloqueado: 12/06/2025</small>
            </div>
            <IonIcon icon={checkmarkCircle} className="status-icon" />
          </div>

          <div className="achievement-card unlocked">
            <IonIcon icon={compassOutline} />
            <div>
              <strong>Explorador de Fortalezas</strong>
              <p>Visitaste todas las fortalezas incas</p>
              <small>Desbloqueado: 20/06/2025</small>
            </div>
            <IonIcon icon={checkmarkCircle} className="status-icon" />
          </div>

          <div className="achievement-card locked">
            <IonIcon icon={lockClosed} />
            <div>
              <strong>Guardián del Patrimonio</strong>
              <p>Completa todos los caminos sagrados</p>
            </div>
          </div>
        </div>

        {/* COMPARTIR */}
        <div className="profile-card share-card">
          <IonIcon icon={shareSocialOutline} className="share-icon" />
          <h3>Comparte tus logros</h3>
          <p>
            Muestra al mundo tu aventura por el patrimonio cultural de Cusco
          </p>

          <IonButton expand="block">
            Compartir perfil
          </IonButton>
        </div>

        {/* ACCIONES */}
        <div className="profile-actions">
          <IonButton expand="block" onClick={() => router.push('/map')}>
            Volver al Mapa
          </IonButton>

          <IonButton
            expand="block"
            fill="outline"
            onClick={() => router.push('/passport')}
          >
            Volver al Pasaporte Digital
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  )
}

export default Perfil

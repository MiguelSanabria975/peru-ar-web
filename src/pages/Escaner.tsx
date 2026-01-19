import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonSpinner,
  useIonRouter
} from '@ionic/react'
import {
  arrowBackOutline,
  qrCodeOutline,
  checkmarkCircleOutline
} from 'ionicons/icons'

import './Escaner.css'

const Escaner: React.FC = () => {
  const ionRouter = useIonRouter()
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success'>('idle')

  const startScan = () => {
    setStatus('scanning')

    setTimeout(() => {
      setStatus('success')
    }, 2500)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            slot="start"
            fill="clear"
            onClick={() => ionRouter.push('/home')}
          >
            <IonIcon icon={arrowBackOutline} />
          </IonButton>

          <IonTitle>Escanear BTC</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="scan-content">

  <div className="scan-background" />

  {status === 'idle' && (
    <div className="scan-card">
      <IonIcon icon={qrCodeOutline} className="scan-icon" />

      <h2>Boleto Turístico de Cusco</h2>

      <p className="scan-tagline">
        Patrimonio Vivo del Mundo
      </p>

      <p>
        Escanea el código QR de tu boleto turístico para
        desbloquear contenido premium y experiencias exclusivas.
      </p>

      <IonButton expand="block" className="scan-primary-btn" onClick={startScan}>
        Iniciar Escaneo
      </IonButton>
    </div>
  )}

  {status === 'scanning' && (
    <div className="scan-card scanning">
      <IonSpinner name="crescent" />
      <p className="scan-status">Escaneando el camino sagrado…</p>

      <IonButton expand="block" disabled>
        Escaneando…
      </IonButton>
    </div>
  )}

  {status === 'success' && (
    <div className="scan-card success">
      <IonIcon
        icon={checkmarkCircleOutline}
        className="scan-success-icon"
      />

      <h2>¡Boleto Verificado!</h2>

      <p>
        Tu Boleto Turístico de Cusco ha sido activado correctamente.
      </p>

      <div className="scan-code">
        BTC-2024-CUSCO-PREMIUM
      </div>

      <IonButton
        expand="block"
        className="scan-primary-btn"
        onClick={() => ionRouter.push('/map')}
      >
        Explorar Mapa de Cusco
      </IonButton>

      <IonButton
        expand="block"
        fill="outline"
        className="scan-secondary-btn"
        routerLink="/passport"
      >
        Ver mi Pasaporte Digital
      </IonButton>
    </div>
  )}

</IonContent>



    </IonPage>
  )
}

export default Escaner

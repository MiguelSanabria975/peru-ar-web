import React from 'react'
import { useParams } from 'react-router-dom'
import { useIonRouter } from '@ionic/react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonText,
  IonChip
} from '@ionic/react'

import { volumeHigh, camera } from 'ionicons/icons'
import { btcSites } from '../data/btcSites'
import { playGuide } from '../services/audio.service'
import { openAR } from '../services/ar.service'

const Site: React.FC = () => {
  const router = useIonRouter()
  const { id } = useParams<{ id: string }>()
  const site = btcSites.find(s => s.id === id)

  if (!site) {
    return <IonText>Sitio no encontrado</IonText>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{site.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonChip color="warning">+{site.xpReward} XP</IonChip>

        <IonText>
          <h2>Historia</h2>
          <p>{site.history}</p>
        </IonText>

        {/* IMAGEN PLACEHOLDER */}
        <div
          style={{
            height: 180,
            background: '#222',
            borderRadius: 12,
            margin: '16px 0'
          }}
        >
          <p style={{ textAlign: 'center', paddingTop: 80 }}>
            Imagen próximamente
          </p>
        </div>

        <IonButton
          expand="block"
          color="warning"
          onClick={() => playGuide(site.audioUrl)}
        >
          <IonIcon slot="start" icon={volumeHigh} />
          Audio inmersivo
        </IonButton>

        <IonButton
         expand="block"
        color="tertiary"
        onClick={() => router.push(`/site/${id}/ar`)}
        >
          <IonIcon slot="start" icon={camera} />
          
          Realidad Aumentada
        </IonButton>

      </IonContent>
    </IonPage>
  )
}

export default Site
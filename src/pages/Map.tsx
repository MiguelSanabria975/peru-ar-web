import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonText,
  IonChip
} from '@ionic/react'

import {
  arrowBack,
  flash,
  trophy,
  eye,
  volumeHigh,
  mapOutline,
  ticketOutline,
  star
} from 'ionicons/icons'

import { useIonRouter } from '@ionic/react'
import { useState } from 'react'
import { btcSites } from '../data/btcSites'
import { ChakanaIcon } from '../components/icons/IncaIcons'

const MapPage = () => {
  const router = useIonRouter()
  const [selectedSite, setSelectedSite] = useState<any>(null)

  const totalXP = btcSites
    .filter(s => s.visited)
    .reduce((acc, s) => acc + s.xpReward, 0)

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonButton onClick={() => router.push('/home')}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>

          <IonTitle>Camino Sagrado</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={eye} />
            </IonButton>
            <IonButton onClick={() => router.push('/passport')}>
              <IonIcon icon={trophy} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="dark">
        {/* XP BAR */}
        <div className="flex justify-center gap-3 py-3">
          <IonChip color="warning">
            <IonIcon icon={flash} />
            <IonText>{totalXP} XP</IonText>
          </IonChip>

          <IonChip color="primary">
            <IonIcon icon={mapOutline} />
            <IonText>
              {btcSites.filter(s => s.visited).length}/{btcSites.length}
            </IonText>
          </IonChip>
        </div>

        {/* MAP */}
        <div className="relative h-[65vh] mx-4 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border border-yellow-600/30">

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center shadow-xl">
              <ChakanaIcon className="w-10 h-10" color="white" />
            </div>
            <IonText className="block text-center text-xs text-white mt-2">
              Tu ubicación
            </IonText>
          </div>

          {btcSites.map((site: any, i: number) => (
            <div
              key={site.id}
              className="absolute cursor-pointer"
              style={{
                top: `${15 + i * 12}%`,
                left: `${20 + (i % 3) * 25}%`
              }}
              onClick={() => setSelectedSite(site)}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 shadow-lg
                  ${site.visited
                    ? 'bg-yellow-500 border-yellow-300'
                    : 'bg-blue-600 border-white'
                  }`}
              >
                <IonIcon icon={star} color="light" />
              </div>

              <IonText className="block text-xs text-white text-center mt-1">
                {site.name}
              </IonText>
            </div>
          ))}
        </div>

        {selectedSite && (
          <IonCard className="mx-4 mt-4">
            <IonCardContent>
              <IonText color="light">
                <h2>{selectedSite.name}</h2>
              </IonText>

              <IonText color="medium">
                <p>{selectedSite.description}</p>
              </IonText>

              <div className="flex gap-3 mt-4">
                <IonButton expand="block" color="warning">
                  Explorar sitio
                </IonButton>

                <IonButton
                  expand="block"
                  fill="outline"
                  onClick={() => setSelectedSite(null)}
                >
                  Cerrar
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        )}

        {!selectedSite && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex gap-3 bg-black/80 px-4 py-2 rounded-full border border-white/20">
              <IonButton size="small" fill="clear">
                <IonIcon icon={volumeHigh} />
              </IonButton>
              <IonButton size="small" fill="clear" onClick={() => router.push('/scan')}>
                <IonIcon icon={ticketOutline} />
              </IonButton>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default MapPage

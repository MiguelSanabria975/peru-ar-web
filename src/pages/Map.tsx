import React, { useEffect, useRef, useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  IonText,
  IonChip,
  IonModal
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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import { BTCSite, btcSites } from '../data/btcSites'
import { ChakanaIcon } from '../components/icons/IncaIcons'

import 'leaflet/dist/leaflet.css'
import './Map.css'

const CUSCO_CENTER: [number, number] = [-13.53195, -71.96746]

const createSiteIcon = (site: BTCSite) =>
  L.divIcon({
    className: 'custom-site-marker',
    html: `
      <div class="marker-core ${site.visited ? 'visited' : 'new'}">
        <span class="marker-star">★</span>
        <span class="marker-name">${site.name}</span>
      </div>
    `,
    iconSize: [120, 42],
    iconAnchor: [60, 42]
  })

const MapPage: React.FC = () => {
  const router = useIonRouter()

  const mapRef = useRef<L.Map | null>(null)

  const [selectedSite, setSelectedSite] = useState<BTCSite | null>(null)

  const totalXP = btcSites
    .filter(s => s.visited)
    .reduce((acc, s) => acc + s.xpReward, 0)

  useEffect(() => {
  const timeout = setTimeout(() => {
    mapRef.current?.invalidateSize()
  }, 400)

  return () => clearTimeout(timeout)
}, [])

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

        {/* MAPA */}
        <div className="map-wrapper">
         <MapContainer
          center={CUSCO_CENTER}
          zoom={14}
          scrollWheelZoom={false}
          className="map-container"
          ref={mapRef}
        >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Usuario */}
            <Marker position={CUSCO_CENTER}>
              <Popup>Tu ubicación actual</Popup>
            </Marker>

            {/* Sitios */}
            {btcSites.map(site => (
              <Marker
                key={site.id}
                position={[site.lat!, site.lng!]}
                icon={createSiteIcon(site)}
                eventHandlers={{
                  click: () => setSelectedSite(site)
                }}
              />
            ))}
          </MapContainer>

          <div className="user-location-label">
            <ChakanaIcon className="chakra-icon" />
            <span>Estás en Cusco</span>
          </div>
        </div>

        {/* MODAL */}
        <IonModal
          isOpen={!!selectedSite}
          onDidDismiss={() => setSelectedSite(null)}
          breakpoints={[0, 0.45]}
          initialBreakpoint={0.45}
        >
          {selectedSite && (
            <div className="site-modal">
              <div className="site-header">
                <IonIcon icon={star} className="site-icon" />
                <span className="site-type">
                  {selectedSite.type.toUpperCase()}
                </span>
              </div>

              <h2>{selectedSite.name}</h2>
              <p>{selectedSite.description}</p>

              <div className="site-meta">
                <IonChip>+{selectedSite.xpReward} XP</IonChip>
                <IonChip>
                  {selectedSite.visited ? 'Visitado' : 'Nuevo'}
                </IonChip>
              </div>

              <IonButton expand="block" color="warning">
                Explorar sitio
              </IonButton>

              <IonButton
                expand="block"
                fill="clear"
                onClick={() => setSelectedSite(null)}
              >
                Cerrar
              </IonButton>
            </div>
          )}
        </IonModal>

        {/* ACCIONES */}
        {!selectedSite && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex gap-3 bg-black/80 px-4 py-2 rounded-full border border-white/20">
              <IonButton size="small" fill="clear">
                <IonIcon icon={volumeHigh} />
              </IonButton>
              <IonButton
                size="small"
                fill="clear"
                onClick={() => router.push('/scan')}
              >
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

import React, { useEffect, useRef } from 'react'
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
  IonCard,
  IonCardContent
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

import { btcSites } from '../data/btcSites'
import { ChakanaIcon } from '../components/icons/IncaIcons'

import 'leaflet/dist/leaflet.css'
import './Map.css'

import L from 'leaflet'

// Fix iconos leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const CUSCO_CENTER: [number, number] = [-13.53195, -71.96746]

const MapPage: React.FC = () => {
  const router = useIonRouter()
  const mapRef = useRef<L.Map | null>(null)

  const totalXP = btcSites
    .filter(s => s.visited)
    .reduce((acc, s) => acc + s.xpReward, 0)

  useEffect(() => {
    setTimeout(() => {
      mapRef.current?.invalidateSize()
    }, 400)
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

            <Marker position={CUSCO_CENTER}>
              <Popup>Tu ubicación actual</Popup>
            </Marker>

            {btcSites.map(site => (
              <Marker
                key={site.id}
                position={[site.lat!, site.lng!]}
              />
            ))}
          </MapContainer>

          <div className="user-location-label">
            <ChakanaIcon className="chakra-icon" />
            <span>Estás en Cusco</span>
          </div>
        </div>

        {/* LISTA DE SITIOS (CARDS) */}
        <div className="sites-cards">
          {btcSites.map(site => (
            <IonCard key={site.id} className="site-card">
              <IonCardContent>
                <div className="site-card-header">
                  <IonIcon icon={star} className="site-card-icon" />
                  <div>
                    <h2>{site.name}</h2>
                    <p className="site-type">{site.type.toUpperCase()}</p>
                  </div>
                </div>

                <IonText color="medium">
                  <p>{site.description}</p>
                </IonText>

                <div className="site-card-meta">
                  <IonChip color="warning">
                    +{site.xpReward} XP
                  </IonChip>

                  <IonChip color={site.visited ? 'success' : 'primary'}>
                    {site.visited ? 'Visitado' : 'Nuevo'}
                  </IonChip>
                </div>

                <IonButton
                  expand="block"
                  color="warning"
                  onClick={() => router.push(`/site/${site.id}`)}
                >
                  Explorar sitio
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </div>

        {/* ACCIONES FLOTANTES */}
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
      </IonContent>
    </IonPage>
  )
}

export default MapPage

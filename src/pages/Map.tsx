<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonIcon
} from '@ionic/react';
import { arrowBackOutline, locateOutline } from 'ionicons/icons';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/* ---------- Fix íconos Leaflet (importante) ---------- */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

/* ---------- Subcomponente para mover el mapa ---------- */
interface FlyToUserProps {
  position: [number, number];
}

const FlyToUser: React.FC<FlyToUserProps> = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 16, { duration: 1.5 });
  }, [position, map]);

  return null;
};

/* ---------- Componente principal ---------- */

const Map: React.FC = () => {
  const cuscoCenter: [number, number] = [-13.53195, -71.96746];

  const [userPosition, setUserPosition] =
    useState<[number, number] | null>(null);

  /* ---------- Obtener geolocalización ---------- */
  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn('Geolocalización no soportada');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([
          position.coords.latitude,
          position.coords.longitude
        ]);
      },
      (error) => {
        console.error('Error de geolocalización:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );
  }, []);

  return (
    <div style={{ position: 'relative' }}>

      {/* BOTÓN VOLVER */}
      <IonButton
        routerLink="/Home"
        fill="solid"
        color="light"
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 1000
        }}
      >
        <IonIcon icon={arrowBackOutline} />
      </IonButton>

      {/* MAPA */}
      <MapContainer
        center={cuscoCenter}
        zoom={15}
        zoomControl={false}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100vw' }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* UBICACIÓN DEL USUARIO */}
        {userPosition && (
          <>
            <Marker position={userPosition}>
              <Popup>Estás aquí</Popup>
            </Marker>
            <FlyToUser position={userPosition} />
          </>
        )}
      </MapContainer>

      {/* BOTÓN CENTRAR UBICACIÓN */}
      {userPosition && (
        <IonButton
          fill="solid"
          color="primary"
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '16px',
            zIndex: 1000
          }}
        >
          <IonIcon icon={locateOutline} />
        </IonButton>
      )}
    </div>
  );
};

export default Map;
=======
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

=======
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

>>>>>>> Stashed changes
=======
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

>>>>>>> Stashed changes
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
      {/* HEADER */}
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

      {/* CONTENT */}
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

        {/* MAP SIMULATION */}
        <div className="relative h-[65vh] mx-4 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border border-yellow-600/30">

          {/* USER POSITION */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center shadow-xl">
              <ChakanaIcon className="w-10 h-10" color="white" />
            </div>
            <IonText className="block text-center text-xs text-white mt-2">
              Tu ubicación
            </IonText>
          </div>

          {/* SITES */}
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

        {/* SITE DETAIL */}
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

        {/* QUICK ACTIONS */}
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

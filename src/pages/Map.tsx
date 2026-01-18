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

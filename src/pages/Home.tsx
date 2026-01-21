import React from 'react';
import Page from '../components/Page';
import {
  IonButton,
  IonIcon,
} from '@ionic/react';
import {
  mapOutline,
  ribbonOutline,
  trailSignOutline,
  leafOutline
} from 'ionicons/icons';

import './Home.css';

/* ---------- Subcomponente reutilizable ---------- */

interface FeatureCardProps {
  icon: string;
  label: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, label }) => (
  <div className="feature-card">
    <IonIcon icon={icon} aria-hidden="true" />
    <span>{label}</span>
  </div>
);

/* ---------- Componente principal ---------- */

const Home: React.FC = () => {
  return (
    <Page>
      <div className="home-container">

        {/* ICONO CENTRAL */}
        <div className="home-icon">
          <IonIcon
            icon={leafOutline}
            aria-label="Símbolo de naturaleza y herencia andina"
          />
        </div>

        {/* TÍTULOS */}
        <h1 className="home-title">Explora Cusco</h1>

        <h2 className="home-subtitle">
          Patrimonio vivo del mundo.
        </h2>

        <p className="home-quote">
          Cada piedra guarda una historia. Cada camino, un conocimiento ancestral.
        </p>

        <p className="home-description">
          Descubre los secretos del imperio Inca en un viaje digital que honra el pasado
          mientras construye el presente.
        </p>

        {/* FEATURES */}
        <div className="home-features">
          <FeatureCard
            icon={mapOutline}
            label={<>Mapa vivo<br />GPS en tiempo real</>}
          />

          <FeatureCard
            icon={ribbonOutline}
            label={<>Sellos sagrados<br />Colección de logros</>}
          />

          <FeatureCard
            icon={trailSignOutline}
            label={<>Rutas temáticas<br />Inca · Gastro · Arte</>}
          />
        </div>

        {/* IMPACTO LOCAL */}
        <div className="home-impact">
          <span className="impact-title">Impacto local</span>
          <p>
            Tu visita apoya a artesanos, mercados y comunidades cusqueñas.
          </p>
        </div>

        {/* ACCIONES */}
        <div className="home-actions">
          <IonButton
            expand="block"
            color="primary"
            routerLink="/map"
          >
            Comenzar recorrido
          </IonButton>

          <IonButton
            expand="block"
            fill="outline"
            routerLink="/Escaner"
          >
            Escanear Boleto Turístico (BTC)
          </IonButton>
        </div>

      </div>
    </Page>
  );
};

export default Home;

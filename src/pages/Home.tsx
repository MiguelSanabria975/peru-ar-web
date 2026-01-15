import Page from '../components/Page'
import { IonButton } from '@ionic/react'

const Home = () => {
  return (
    <Page title="Explora Cusco">
      <IonButton expand="block" routerLink="/map">
        Ver mapa
      </IonButton>

      <IonButton expand="block" routerLink="/passport">
        Mi pasaporte
      </IonButton>
    </Page>
  )
}

export default Home

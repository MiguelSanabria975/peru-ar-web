import { useEffect } from 'react'
import { useParams } from 'react-router'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonContent
} from '@ionic/react'

import { useIonRouter } from '@ionic/react'

const SiteAR: React.FC = () => {
  const router = useIonRouter()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    // MindAR necesita cargar DESPUÉS del render
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image.prod.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // limpieza al salir
      document.body.removeChild(script)
    }
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR – {id}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* ESCENA AR */}
       

        <IonButton
          expand="block"
          color="danger"
          onClick={() => router.goBack()}
        >
          Cerrar AR
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default SiteAR

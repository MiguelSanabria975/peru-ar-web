import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react'

interface PageProps {
  title?: string
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <IonPage>
      {title && (
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}

      <IonContent fullscreen>
        {children}
      </IonContent>
    </IonPage>
  )
}

export default Page

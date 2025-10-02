import React from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>مرحبا</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>أهلا وسهلا</h1>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;

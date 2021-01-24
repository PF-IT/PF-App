import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feedback</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feedback</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h1>We'll add a feedback form here.</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

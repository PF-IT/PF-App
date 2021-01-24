import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-text-center ion-padding">
          <h1>What is this app about?</h1>
          <p>Traditionally DTU students were handed a physical version of the <strong>rusbook</strong>. The main purpose of this app is to provide a more sustainable
             and accessible way for students to look up important information regarding their studies. Hence, remove the need to print a physical version of the handbook. 👏</p>
          <i>"The project is made by students for students. And the project is aimed to be fully transparent."</i>
          <p>Starostka & Sam</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

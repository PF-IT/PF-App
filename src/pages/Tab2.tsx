import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonRefresher, IonItemSliding, IonItemOption, IonItem, IonRefresherContent, IonItemOptions, IonLabel, IonList, IonAlert, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonIcon, IonButton } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { RusbookChapter_Welcome } from '../components/rusbookChapters/RusbookChapter_Welcome';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [displayChapter, setDisplayChapter] = useState(false);

  // refresh on pull-down
  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log("Begin async operation");
    setTimeout(() => {
      // setTimeout is used to illustrate som async data retrieval
      setShowAlert(true);
      console.log("Async operation ended");
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rusbook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Rusbook</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Waaait a sec...'}
          subHeader={'Connection Status'}
          message={'The services are not yet connected to the app.'}
          buttons={['Okay']}
        ></IonAlert>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
          <IonRefresherContent
            pullingText="Pull to refresh"
            refreshingText="Refreshing...">
          </IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonCard className="card">
            <IonCardHeader>
              <IonCardTitle>Welcome</IonCardTitle>
              <IonCardSubtitle>Click the <strong>Expand</strong> button to see the content.</IonCardSubtitle>
              <IonButton className="ion-padding" onClick={() => {displayChapter ? setDisplayChapter(false) : setDisplayChapter(true)}}>
                {displayChapter ? <strong>Close</strong> : <strong>Expand</strong>}
              </IonButton>
              {displayChapter && <RusbookChapter_Welcome/>}
            </IonCardHeader>
          </IonCard>
        </IonList>
        {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar> TODO: We'll add search at a later stage */}
        {/* <RusbookChapter_Welcome/> */}
      </IonContent>
    </IonPage>
  );

};

export default Tab2;

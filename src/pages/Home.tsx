import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton, IonPicker } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <IonButton id="open-picker">Open</IonButton>
      <IonPicker
        trigger="open-picker"
        columns={[
          {
            name: 'languages',
            options: [
              {
                text: 'Продать Крипту',
                value: 'selec1',
              },
              {
                text: 'Купить Валюту',
                value: 'selec2',
              },
              {
                text: 'Обменять Баты',
                value: 'selec3',
              },
              {
                text: 'Сходить в Кино',
                value: 'selec3',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: (value) => {
              console.log(`You selected: ${value.languages.value}`);
            },
          },
        ]}
      ></IonPicker>
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>First Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            First Content
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Second Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Second Content
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>Third Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Third Content
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </IonPage>
  );
};

export default Home;

import React, { useState } from 'react';
import { IonButton, IonPicker, IonItem, IonList, IonSelect, IonSelectOption, IonText, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonRouterOutlet, IonFooter, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonActionSheet, IonCol, IonGrid, IonRow, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { swapHorizontalOutline, cashOutline, beerOutline, search, add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IONIC UX+UI</IonTitle>
          <IonProgressBar type="indeterminate"></IonProgressBar>
        </IonToolbar>
      </IonHeader>
      
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="ion-text-center">
              <IonButton expand="block" onClick={() => setIsOpen(true)}>ПОКУПАЕМ</IonButton>
              <IonPicker
                isOpen={isOpen}
                onDidDismiss={() => setIsOpen(false)}
                columns={[
                  {
                    name: 'actions',
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
            </div> 
          </IonCol>
          <IonCol>
            <div className="ion-text-center">
              <IonButton expand="block" id="open-action-sheet">ПРОДАЕМ</IonButton>
              <IonActionSheet
                trigger="open-action-sheet"
                header="Actions"
                buttons={[
                  {
                    text: 'Delete',
                    role: 'destructive',
                    data: {
                      action: 'delete',
                    },
                  },
                  {
                    text: 'Share',
                    data: {
                      action: 'share',
                    },
                  },
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    data: {
                      action: 'cancel',
                    },
                  },
                ]}
              ></IonActionSheet>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      
      <IonList>
        <IonItem>
          <IonSelect placeholder="Выберите один">
            <div slot="label">
              Что делаем? <IonText color="danger">(выбрать)</IonText>
            </div>
            <IonSelectOption value="apple">Продаем Валюту</IonSelectOption>
            <IonSelectOption value="banana">Покупаем Биткоины</IonSelectOption>
            <IonSelectOption value="orange">Сливаем Активы</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>

      <div className="ion-text-center">    
      <br /><br /><br /><br /><br />
        <IonFab>
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={chevronUp}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={chevronForward}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={chevronForward}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={chevronDown}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={chevronBack}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={chevronBack}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </div>
    </>
  );
};

export default Home;

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import MonstersContext from "../store/MonstersContext";

const MonsterBuilder: React.FC = () => {
  const context = useContext(MonstersContext);

  const addMonsterHandler = async () => {
    console.log('Add Monster');
    context.addMonster(Math.random().toString());
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Monster Builder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          {context.monsters.map((monster) => (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{monster.id}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
          <IonRow>
            <IonCol>
              <IonButton onClick={addMonsterHandler}>Add Monster</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MonsterBuilder;

import {
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
  isPlatform,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useContext } from "react";
import FixedBottomFab from "../components/FixedBottomFab";
import ToolbarAction from "../components/ToolbarAction";
import MonstersContext from "../store/MonstersContext";

const Monsters: React.FC = () => {
  const context = useContext(MonstersContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Monster Builder</IonTitle>
          {isPlatform("ios") && (
            <ToolbarAction icon={add} link="/new-monster" />
          )}
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
        </IonGrid>
        {!isPlatform("ios") && (
          <FixedBottomFab icon={add} link="/new-monster" />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Monsters;

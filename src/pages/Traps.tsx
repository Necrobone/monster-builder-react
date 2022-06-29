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
import TrapsContext from "../store/TrapsContext";

const Traps: React.FC = () => {
  const context = useContext(TrapsContext);

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Trap Builder</IonTitle>
            {isPlatform("ios") && (
                <ToolbarAction icon={add} link="/new-trap" />
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            {context.traps.map((trap) => (
                <IonRow>
                  <IonCol>
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>{trap.id}</IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                </IonRow>
            ))}
          </IonGrid>
          {!isPlatform("ios") && (
              <FixedBottomFab icon={add} link="/new-trap" />
          )}
        </IonContent>
      </IonPage>
  );
};

export default Traps;

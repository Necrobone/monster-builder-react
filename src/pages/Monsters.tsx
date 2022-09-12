import {
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { add, skull, trash } from "ionicons/icons";
import React, { useContext } from "react";
import FixedBottomFab from "../components/FixedBottomFab";
import ToolbarAction from "../components/ToolbarAction";
import MonsterBuilderContext from "../store/MonsterBuilderContext";

const Monsters: React.FC = () => {
  const context = useContext(MonsterBuilderContext);

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
          <IonList>
            {context.monsters.map((monster) => (
              <IonItemSliding key={monster.id}>
                <IonItem routerLink={`monsters/${monster.id}`}>
                  <IonLabel>{monster.id}</IonLabel>
                  <IonIcon icon={skull}></IonIcon>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => {}}>
                    <IonIcon icon={trash}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        </IonGrid>
        {!isPlatform("ios") && (
          <FixedBottomFab icon={add} link="/new-monster" />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Monsters;

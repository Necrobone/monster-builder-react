import { SegmentChangeEventDetail } from "@ionic/core";
import { IonSegmentCustomEvent } from "@ionic/core/dist/types/components";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import MonsterAbilitiesTab from "../components/MonsterAbilitiesTab";
import MonsterInfoTab from "../components/MonsterInfoTab";
import MonsterSkillsTab from "../components/MonsterSkillsTab";
import MonsterTraitsTab from "../components/MonsterTraitsTab";
import { Tabs } from "../enum/Tabs";
import MonsterBuilderContext from "../store/MonsterBuilderContext";

interface MonsterBuilderProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const MonsterBuilder: React.FC<MonsterBuilderProps> = ({ match }) => {
  const context = useContext(MonsterBuilderContext);
  const history = useHistory();

  // If we have an ID, load the monster from the store, otherwise create a new one.
  // UseEffect because it needs to do it after component loads.
  useEffect(() => {
    if (match.params.id) {
      console.log("LOADING MONSTER", match.params.id);
      context.clearMonster();
      context.loadMonster(match.params.id);
    } else if (!context.getMonster()) {
      console.log("NEW MONSTER", context.getMonster());
      context.createMonster();
    }
  }, [context, match.params.id]);

  console.log("Finding monster", match.params.id, context.getMonster());

  // Tab logic
  const [selectedTab, setSelectedTab] = useState<string | undefined>(Tabs.Info);
  const selectTabHandler = (
    event: IonSegmentCustomEvent<SegmentChangeEventDetail>
  ) => {
    const selectedTab: string | undefined = event.detail.value;
    setSelectedTab(selectedTab);
  };

  const displayTab = () => {
    switch (selectedTab) {
      case Tabs.Skills:
        return <MonsterSkillsTab></MonsterSkillsTab>;
      case Tabs.Abilities:
        return <MonsterAbilitiesTab></MonsterAbilitiesTab>;
      case Tabs.Traits:
        return <MonsterTraitsTab></MonsterTraitsTab>;
      case Tabs.Info:
      default:
        return <MonsterInfoTab></MonsterInfoTab>;
    }
  };

  const saveMonsterHandler = () => {
    context.saveMonster();
    history.length > 0 ? history.goBack() : history.replace("/monsters");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Monster</IonTitle>
          <IonButtons slot="end">
            <IonBackButton defaultHref="/monsters" />
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value={selectedTab} onIonChange={selectTabHandler}>
            <IonSegmentButton value={Tabs.Info}>
              <IonLabel>{Tabs.Info}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={Tabs.Traits}>
              <IonLabel>{Tabs.Traits}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={Tabs.Abilities}>
              <IonLabel>{Tabs.Abilities}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={Tabs.Skills}>
              <IonLabel>{Tabs.Skills}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{displayTab()}</IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            expand="block"
            color="secondary"
            onClick={saveMonsterHandler}
          >
            Save Monster
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default MonsterBuilder;

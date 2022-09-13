import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { Fragment, useContext } from "react";
import { Scales } from "../enum/monster/Scales";
import { getNamesAndValues } from "../helpers/EnumHelpers";
import MonsterBuilderContext from "../store/MonsterBuilderContext";
import ChipsModal from "./ChipsModal";
import ModalCard from "./ModalCard";

const MonsterSkillsTab: React.FC = () => {
  const context = useContext(MonsterBuilderContext);
  const monster = context.getMonster();

  return (
    <Fragment>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard
              id="perception"
              title="Monster Perception"
              label="Choose Perception"
            ></ModalCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChipsModal
        trigger="perception"
        chips={getNamesAndValues(Scales)}
        title="Choose Perception"
        type="normal"
        selected={[monster?.perception]}
      ></ChipsModal>
    </Fragment>
  );
};

export default MonsterSkillsTab;

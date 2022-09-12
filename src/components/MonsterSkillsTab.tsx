import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { Fragment } from "react";
import { Scales } from "../enum/monster/Scales";
import { getNamesAndValues } from "../helpers/EnumHelpers";
import { Monster } from "../models/Monster";
import ChipsModal from "./ChipsModal";
import ModalCard from "./ModalCard";

interface MonsterSkillsTabProps {
  monster: Monster | undefined;
}

const MonsterSkillsTab: React.FC<MonsterSkillsTabProps> = (props) => {
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
        selected={props.monster?.perception ?? ""}
      ></ChipsModal>
    </Fragment>
  );
};

export default MonsterSkillsTab;

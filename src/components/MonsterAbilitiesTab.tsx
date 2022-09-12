import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { Fragment } from "react";
import { Scales } from "../enum/monster/Scales";
import { getNamesAndValues } from "../helpers/EnumHelpers";
import ChipsModal from "./ChipsModal";
import ModalCard from "./ModalCard";

const MonsterAbilitiesTab: React.FC = () => {
  return (
    <Fragment>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard
              id="strength"
              title="Monster Strength"
              label="Choose Strength"
            ></ModalCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChipsModal
        trigger="strength"
        chips={getNamesAndValues(Scales)}
        title="Choose Strength"
        type="normal"
        selected={Scales.High}
      ></ChipsModal>
    </Fragment>
  );
};

export default MonsterAbilitiesTab;

import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { Fragment } from "react";
import { Alignments } from "../enum/monster/Alignments";
import { Languages } from "../enum/monster/Languages";
import { Levels } from "../enum/monster/Levels";
import { Rarities } from "../enum/monster/Rarities";
import { Sizes } from "../enum/monster/Sizes";
import { CreatureTypeTraits } from "../enum/monster/traits/CreatureTypeTraits";
import { getNamesAndValues, getValuesAsNames } from "../helpers/EnumHelpers";
import ChipsModal from "./ChipsModal";
import DropdownCard from "./DropdownCard";
import ModalCard from "./ModalCard";

const MonsterInfoTab: React.FC = () => {
  return (
    <Fragment>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Level"
              options={getValuesAsNames(Levels)}
            ></DropdownCard>
          </IonCol>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Size"
              options={getNamesAndValues(Sizes)}
            ></DropdownCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Alignment"
              options={getNamesAndValues(Alignments)}
            ></DropdownCard>
          </IonCol>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Rarity"
              options={getNamesAndValues(Rarities)}
            ></DropdownCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard id="type" title="Type" label="Choose Type"></ModalCard>
          </IonCol>
          <IonCol sizeLg="6">
            <ModalCard
              id="languages"
              title="Languages"
              label="Choose Languages"
            ></ModalCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChipsModal
        trigger="type"
        chips={getNamesAndValues(CreatureTypeTraits)}
        title="Choose Type"
        type="normal"
        selected={CreatureTypeTraits.Aberration}
      ></ChipsModal>
      <ChipsModal
        trigger="languages"
        chips={getNamesAndValues(Languages)}
        title="Choose Languages"
        type="normal"
        selected={Languages.Abyssal}
      ></ChipsModal>
    </Fragment>
  );
};

export default MonsterInfoTab;

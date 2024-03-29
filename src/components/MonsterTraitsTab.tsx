import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { Fragment, useContext } from "react";
import { AncestryTraits } from "../enum/monster/traits/AncestryTraits";
import { ElementalTraits } from "../enum/monster/traits/ElementalTraits";
import { EnergyTraits } from "../enum/monster/traits/EnergyTraits";
import { EquipmentTraits } from "../enum/monster/traits/EquipmentTraits";
import { MonsterTraits } from "../enum/monster/traits/MonsterTraits";
import { PlanarTraits } from "../enum/monster/traits/PlanarTraits";
import { SchoolTraits } from "../enum/monster/traits/SchoolTraits";
import { TraditionTraits } from "../enum/monster/traits/TraditionTraits";
import { getNamesAndValues } from "../helpers/EnumHelpers";
import MonsterBuilderContext from "../store/MonsterBuilderContext";
import ChipsModal from "./ChipsModal";
import ModalCard from "./ModalCard";

const MonsterTraitsTab: React.FC = () => {
  const context = useContext(MonsterBuilderContext);
  const monster = context.getMonster();

  return (
    <Fragment>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard
              id="ancestry"
              title="Ancestry"
              label="Choose Ancestry traits"
            ></ModalCard>
          </IonCol>
          <IonCol sizeLg="6">
            <ModalCard
              id="element"
              title="Element"
              label="Choose Element traits"
            ></ModalCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard
              id="energy"
              title="Energy"
              label="Choose Energy traits"
            ></ModalCard>
          </IonCol>
          <IonCol sizeLg="6">
            <ModalCard
              id="equipment"
              title="Equipment"
              label="Choose Equipment traits"
            ></ModalCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard
              id="planar"
              title="Planar"
              label="Choose Planar traits"
            ></ModalCard>
          </IonCol>
          <IonCol sizeLg="6">
            <ModalCard
              id="school"
              title="School"
              label="Choose School traits"
            ></ModalCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6">
            <ModalCard
              id="tradition"
              title="Tradition"
              label="Choose Tradition traits"
            ></ModalCard>
          </IonCol>
          <IonCol sizeLg="6">
            <ModalCard
              id="monster"
              title="Monster"
              label="Choose Monster traits"
            ></ModalCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChipsModal
        trigger="ancestry"
        chips={getNamesAndValues(AncestryTraits)}
        title="Choose Ancestry traits"
        type="normal"
        selected={monster?.ancestries}
      ></ChipsModal>
      <ChipsModal
        trigger="element"
        chips={getNamesAndValues(ElementalTraits)}
        title="Choose Element traits"
        type="normal"
        selected={monster?.elements}
      ></ChipsModal>
      <ChipsModal
        trigger="energy"
        chips={getNamesAndValues(EnergyTraits)}
        title="Choose Energy traits"
        type="normal"
        selected={monster?.energies}
      ></ChipsModal>
      <ChipsModal
        trigger="equipment"
        chips={getNamesAndValues(EquipmentTraits)}
        title="Choose Equipment traits"
        type="normal"
        selected={monster?.equipments}
      ></ChipsModal>
      <ChipsModal
        trigger="planar"
        chips={getNamesAndValues(PlanarTraits)}
        title="Choose Planar traits"
        type="normal"
        selected={monster?.planars}
      ></ChipsModal>
      <ChipsModal
        trigger="school"
        chips={getNamesAndValues(SchoolTraits)}
        title="Choose School traits"
        type="normal"
        selected={monster?.schools}
      ></ChipsModal>
      <ChipsModal
        trigger="tradition"
        chips={getNamesAndValues(TraditionTraits)}
        title="Choose Tradition traits"
        type="normal"
        selected={monster?.traditions}
      ></ChipsModal>
      <ChipsModal
        trigger="monster"
        chips={getNamesAndValues(MonsterTraits)}
        title="Choose Monster traits"
        type="normal"
        selected={monster?.monsters}
      ></ChipsModal>
    </Fragment>
  );
};

export default MonsterTraitsTab;

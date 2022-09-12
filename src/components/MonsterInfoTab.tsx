import { SelectChangeEventDetail } from "@ionic/core";
import { IonSelectCustomEvent } from "@ionic/core/dist/types/components";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { Fragment, useContext } from "react";
import { Alignments } from "../enum/monster/Alignments";
import { Languages } from "../enum/monster/Languages";
import { Levels } from "../enum/monster/Levels";
import { Rarities } from "../enum/monster/Rarities";
import { Sizes } from "../enum/monster/Sizes";
import { CreatureTypeTraits } from "../enum/monster/traits/CreatureTypeTraits";
import { getNamesAndValues, getValuesAsNames } from "../helpers/EnumHelpers";
import MonsterBuilderContext from "../store/MonsterBuilderContext";
import ChipsModal from "./ChipsModal";
import DropdownCard from "./DropdownCard";
import ModalCard from "./ModalCard";

const MonsterInfoTab: React.FC = () => {
  const context = useContext(MonsterBuilderContext);
  const monster = context.getMonster();

  const onChangeMonsterLevelDropdownHandler = (
    event: IonSelectCustomEvent<SelectChangeEventDetail>
  ) => {
    if (monster && event.detail.value !== undefined) {
      monster.level = event.detail.value;
    }
  };

  const onChangeMonsterSizeDropdownHandler = (
    event: IonSelectCustomEvent<SelectChangeEventDetail>
  ) => {
    if (monster && event.detail.value !== undefined) {
      monster.size = event.detail.value;
    }
  };

  const onChangeMonsterAlignmentDropdownHandler = (
    event: IonSelectCustomEvent<SelectChangeEventDetail>
  ) => {
    if (monster && event.detail.value !== undefined) {
      monster.alignment = event.detail.value;
    }
  };

  const onChangeMonsterRarityDropdownHandler = (
    event: IonSelectCustomEvent<SelectChangeEventDetail>
  ) => {
    if (monster && event.detail.value !== undefined) {
      monster.rarity = event.detail.value;
    }
  };

  return (
    <Fragment>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Level"
              options={getValuesAsNames(Levels)}
              onChange={onChangeMonsterLevelDropdownHandler}
              selected={monster?.level}
            ></DropdownCard>
          </IonCol>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Size"
              options={getNamesAndValues(Sizes)}
              onChange={onChangeMonsterSizeDropdownHandler}
              selected={monster?.size}
            ></DropdownCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Alignment"
              options={getNamesAndValues(Alignments)}
              onChange={onChangeMonsterAlignmentDropdownHandler}
              selected={monster?.alignment}
            ></DropdownCard>
          </IonCol>
          <IonCol sizeLg="6">
            <DropdownCard
              title="Rarity"
              options={getNamesAndValues(Rarities)}
              onChange={onChangeMonsterRarityDropdownHandler}
              selected={monster?.rarity}
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

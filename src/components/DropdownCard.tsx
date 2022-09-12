import { SelectChangeEventDetail } from "@ionic/core";
import { IonSelectCustomEvent } from "@ionic/core/dist/types/components";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";

interface Options {
  name: string | number;
  value: string | number;
}

interface DropdownProps {
  title: string;
  options: Options[];
  onChange: (event: IonSelectCustomEvent<SelectChangeEventDetail>) => void;
  selected?: string | number;
}

const DropdownCard: React.FC<DropdownProps> = (props) => {
  console.log(props);
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonSelect
          interface="popover"
          placeholder="Choose level"
          value={props.selected}
          onIonChange={props.onChange}
        >
          {props.options.map((level) => {
            return (
              <IonSelectOption value={level["value"]} key={level["value"]}>
                {level["name"]}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      </IonCardContent>
    </IonCard>
  );
};

export default DropdownCard;

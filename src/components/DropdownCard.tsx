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
  selected?: string | number;
}

const DropdownCard: React.FC<DropdownProps> = (props) => {
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

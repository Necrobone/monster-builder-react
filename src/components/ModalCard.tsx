import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

interface ModalCardProps {
  id: string;
  title: string;
  label: string;
}

const ModalCard: React.FC<ModalCardProps> = (props) => {
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton expand="full" id={props.id}>
          {props.label}
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ModalCard;

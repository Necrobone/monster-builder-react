import {
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";

interface Chip {
  name: string;
  value: string | number;
}

interface ChipsModalProps {
  trigger: string;
  title: string;
  chips: Chip[];
  type: string;
  selected: string | number;
}

const ChipsModal: React.FC<ChipsModalProps> = (props) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  return (
    <IonModal
      ref={modal}
      trigger={props.trigger}
      presentingElement={presentingElement!}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="traits-row">
            {props.chips.map((chip) => (
              <IonCol className="traits-column" sizeXs="6">
                <IonChip
                  key={chip.value}
                  className={`trait ${
                    props.selected === chip.value ? props.type : ""
                  }`}
                >
                  <IonLabel>{chip.name}</IonLabel>
                </IonChip>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default ChipsModal;

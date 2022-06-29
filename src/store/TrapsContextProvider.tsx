import { Storage } from "@capacitor/storage";
import React, { useCallback, useEffect, useState } from "react";
import { Trap } from "../models/Trap";
import TrapsContext from "./TrapsContext";

const TrapsContextProvider: React.FC = (props) => {
  const [traps, setTraps] = useState<Trap[]>([]);

  useEffect(() => {
    Storage.set({
      key: "traps",
      value: JSON.stringify(traps),
    }).catch((error) => console.log(error));
  }, [traps]);

  const addTrap = async (id: string) => {
    const newTrap: Trap = new Trap(id);

    setTraps((current) => {
      return [...current, newTrap];
    });
  };

  const initContext = useCallback(async () => {
    const trapsData = await Storage.get({ key: "traps" });
    const storedTraps = trapsData.value ? JSON.parse(trapsData.value) : [];

    setTraps(storedTraps);
  }, []);

  return (
    <TrapsContext.Provider
      value={{
        traps,
        addTrap,
        initContext,
      }}
    >
      {props.children}
    </TrapsContext.Provider>
  );
};

export default TrapsContextProvider;

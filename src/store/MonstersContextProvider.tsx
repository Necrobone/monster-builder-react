import { Storage } from "@capacitor/storage";
import React, { useCallback, useEffect, useState } from "react";
import { Monster } from "../models/monster.model";
import MonstersContext from "./MonstersContext";

const MonstersContextProvider: React.FC = (props) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    Storage.set({
      key: "monsters",
      value: JSON.stringify(monsters),
    });
  }, [monsters]);

  const addMonster = async (id: string) => {
    const newMonster: Monster = new Monster(id);
    console.log(newMonster);

    setMonsters((current) => {
      return [...current, newMonster];
    });
  };

  const initContext = useCallback(async () => {
    console.log('Init context');
    const monstersData = await Storage.get({ key: "monsters" });
    console.log(monstersData);
    const storedMonsters = monstersData.value
      ? JSON.parse(monstersData.value)
      : [];

    console.log(storedMonsters);

    setMonsters(storedMonsters);
  }, []);

  return (
    <MonstersContext.Provider
      value={{
        monsters,
        addMonster,
        initContext,
      }}
    >
      {props.children}
    </MonstersContext.Provider>
  );
};

export default MonstersContextProvider;

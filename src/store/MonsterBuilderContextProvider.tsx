import { Storage } from "@capacitor/storage";
import React, { useCallback, useEffect, useState } from "react";
import { generateUniqueID } from "web-vitals/dist/lib/generateUniqueID";
import { Monster } from "../models/Monster";
import { Trap } from "../models/Trap";
import MonsterBuilderContext from "./MonsterBuilderContext";

const MonsterBuilderContextProvider: React.FC = (props) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [traps, setTraps] = useState<Trap[]>([]);

  useEffect(() => {
    Storage.set({
      key: "monsters",
      value: JSON.stringify(monsters),
    });
  }, [monsters]);

  useEffect(() => {
    Storage.set({
      key: "traps",
      value: JSON.stringify(traps),
    });
  }, [traps]);

  const addMonster = async () => {
    const id = generateUniqueID();
    const newMonster: Monster = new Monster(id);

    const currentMonster = monsters[parseInt(id)] || null;
    if (currentMonster) {
      throw new Error("Monster already exists");
    }

    setMonsters((current) => {
      return [...current, newMonster];
    });
  };

  const addTrap = async () => {
    const newTrap: Trap = new Trap(generateUniqueID());
    console.log(newTrap);

    setTraps((current) => {
      return [...current, newTrap];
    });
  };

  const initContext = useCallback(async () => {
    console.log("Init context");
    const monstersData = await Storage.get({ key: "monsters" });
    const trapsData = await Storage.get({ key: "traps" });
    console.log(monstersData);
    console.log(trapsData);
    const storedMonsters = monstersData.value
      ? JSON.parse(monstersData.value)
      : [];
    const storedTraps = trapsData.value ? JSON.parse(trapsData.value) : [];

    console.log(storedMonsters);
    console.log(storedTraps);

    setMonsters(storedMonsters);
    setTraps(storedTraps);
  }, []);

  return (
    <MonsterBuilderContext.Provider
      value={{
        monsters,
        traps,
        addMonster,
        addTrap,
        initContext,
      }}
    >
      {props.children}
    </MonsterBuilderContext.Provider>
  );
};

export default MonsterBuilderContextProvider;

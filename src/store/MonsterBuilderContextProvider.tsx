import { Storage } from "@capacitor/storage";
import React, { useCallback, useEffect, useState } from "react";
import { Monster } from "../models/Monster";
import { Trap } from "../models/Trap";
import MonsterBuilderContext from "./MonsterBuilderContext";

const MonsterBuilderContextProvider: React.FC = (props) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [traps, setTraps] = useState<Trap[]>([]);
  const [loadedMonster, setLoadedMonster] = useState<Monster | undefined>(
    undefined
  );

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

  const loadMonster = (id: string) => {
    const loadedMonster = monsters.find((monster) => monster.id === id);

    if (!loadedMonster) {
      throw new Error("Monster not found!");
    }

    setLoadedMonster(loadedMonster);
  };

  const createMonster = () => {
    setLoadedMonster(new Monster());
  };

  const getMonster = () => loadedMonster;

  const saveMonster = () => {
    if (loadedMonster) {
      setMonsters((current) => {
        return [...current, loadedMonster];
      });
    }
  };

  const clearMonster = () => setLoadedMonster(undefined);

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
        createMonster,
        loadMonster,
        getMonster,
        saveMonster,
        clearMonster,
        initContext,
      }}
    >
      {props.children}
    </MonsterBuilderContext.Provider>
  );
};

export default MonsterBuilderContextProvider;

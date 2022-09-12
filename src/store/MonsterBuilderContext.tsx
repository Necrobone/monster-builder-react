import React from "react";
import { Monster } from "../models/Monster";
import { Trap } from "../models/Trap";

const MonsterBuilderContext = React.createContext<{
  monsters: Monster[];
  traps: Trap[];
  createMonster: () => void;
  loadMonster: (id: string) => void;
  getMonster: () => Monster | undefined;
  saveMonster: () => void;
  clearMonster: () => void;
  initContext: () => void;
}>({
  monsters: [],
  traps: [],
  createMonster: () => {},
  loadMonster: () => {},
  getMonster: () => undefined,
  saveMonster: () => {},
  clearMonster: () => {},
  initContext: () => {},
});

export default MonsterBuilderContext;

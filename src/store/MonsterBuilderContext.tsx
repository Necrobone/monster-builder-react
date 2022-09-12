import React from "react";
import { Monster } from "../models/Monster";
import { Trap } from "../models/Trap";

const MonsterBuilderContext = React.createContext<{
  monsters: Monster[];
  traps: Trap[];
  addMonster: () => void;
  addTrap: () => void;
  initContext: () => void;
}>({
  monsters: [],
  traps: [],
  addMonster: () => {},
  addTrap: () => {},
  initContext: () => {},
});

export default MonsterBuilderContext;

import React from "react";
import { Monster } from "../models/Monster";

const MonstersContext = React.createContext<{
  monsters: Monster[];
  addMonster: (id: string) => void;
  initContext: () => void;
}>({
  monsters: [],
  addMonster: () => {},
  initContext: () => {},
});

export default MonstersContext;

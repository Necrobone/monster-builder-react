import React from "react";
import { Trap } from "../models/Trap";

const TrapsContext = React.createContext<{
  traps: Trap[];
  addTrap: (id: string) => void;
  initContext: () => void;
}>({
  traps: [],
  addTrap: () => {},
  initContext: () => {},
});

export default TrapsContext;

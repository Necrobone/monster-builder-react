import { generateUniqueID } from "web-vitals/dist/lib/generateUniqueID";

export interface Monster {
  id: string;
  name: string;
  level: number;
  alignment: string;
  size: string;
  types: string[];
  ancestries: string[];
  elements: string[];
  energies: string[];
  equipments: string[];
  planars: string[];
  schools: string[];
  traditions: string[];
  monsters: string[];
  traits: string[];
  rarity: string;
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
  perception: string;
  languages: string[];
  acrobatics: string;
  arcana: string;
  athletics: string;
  crafting: string;
  deception: string;
  diplomacy: string;
  intimidation: string;
  lore: string;
  medicine: string;
  nature: string;
  occultism: string;
  performance: string;
  religion: string;
  society: string;
  stealth: string;
  survival: string;
  thievery: string;
}

export class Monster {
  id: string;

  constructor() {
    this.id = generateUniqueID();
  }
}

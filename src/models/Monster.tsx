import { generateUniqueID } from "web-vitals/dist/lib/generateUniqueID";
import { Alignments } from "../enum/monster/Alignments";
import { Languages } from "../enum/monster/Languages";
import { Levels } from "../enum/monster/Levels";
import { Rarities } from "../enum/monster/Rarities";
import { Scales } from "../enum/monster/Scales";
import { Sizes } from "../enum/monster/Sizes";
import { AncestryTraits } from "../enum/monster/traits/AncestryTraits";
import { CreatureTypeTraits } from "../enum/monster/traits/CreatureTypeTraits";
import { ElementalTraits } from "../enum/monster/traits/ElementalTraits";
import { EnergyTraits } from "../enum/monster/traits/EnergyTraits";
import { MonsterTraits } from "../enum/monster/traits/MonsterTraits";

export interface Monster {
  id: string;
  name?: string;
  level?: Levels;
  alignment?: Alignments;
  size?: Sizes;
  types: CreatureTypeTraits[];
  ancestries: AncestryTraits[];
  elements: ElementalTraits[];
  energies: EnergyTraits[];
  traits: MonsterTraits[];
  rarity?: Rarities;
  strength?: Scales;
  dexterity?: Scales;
  constitution?: Scales;
  intelligence?: Scales;
  wisdom?: Scales;
  charisma?: Scales;
  perception?: Scales;
  languages: Languages[];
  acrobatics?: Scales;
  arcana?: Scales;
  athletics?: Scales;
  crafting?: Scales;
  deception?: Scales;
  diplomacy?: Scales;
  intimidation?: Scales;
  lore?: Scales;
  medicine?: Scales;
  nature?: Scales;
  occultism?: Scales;
  performance?: Scales;
  religion?: Scales;
  society?: Scales;
  stealth?: Scales;
  survival?: Scales;
  thievery?: Scales;
}

export class Monster {
  id: string;

  constructor() {
    this.id = generateUniqueID();
  }
}

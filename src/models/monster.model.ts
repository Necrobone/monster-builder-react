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

export class Monster {
  constructor(
    public id: String,
    public name: String,
    public level?: Levels,
    public alignment?: Alignments,
    public size?: Sizes,
    public types: CreatureTypeTraits[] = [],
    public ancestries: AncestryTraits[] = [],
    public elements: ElementalTraits[] = [],
    public energies: EnergyTraits[] = [],
    public traits: MonsterTraits[] = [],
    public rarity?: Rarities,
    public strength?: Scales,
    public dexterity?: Scales,
    public constitution?: Scales,
    public intelligence?: Scales,
    public wisdom?: Scales,
    public charisma?: Scales,
    public perception?: Scales,
    public languages: Languages[] = [],
    public acrobatics?: Scales,
    public arcana?: Scales,
    public athletics?: Scales,
    public crafting?: Scales,
    public deception?: Scales,
    public diplomacy?: Scales,
    public intimidation?: Scales,
    public lore?: Scales,
    public medicine?: Scales,
    public nature?: Scales,
    public occultism?: Scales,
    public performance?: Scales,
    public religion?: Scales,
    public society?: Scales,
    public stealth?: Scales,
    public survival?: Scales,
    public thievery?: Scales
  ) {}
}

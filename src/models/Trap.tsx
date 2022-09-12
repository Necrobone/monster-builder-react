import { generateUniqueID } from "web-vitals/dist/lib/generateUniqueID";

export interface Trap {
  id: string;
}

export class Trap {
  id: string;

  constructor() {
    this.id = generateUniqueID();
  }
}

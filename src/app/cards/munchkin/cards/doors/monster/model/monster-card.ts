import { DoorCard } from "../../door-card";
import { MonsterType } from "./monster-type";
import { ImageTopLayout } from "src/app/cards/infrastructure/cards";

/**
 * Represents a monster card. Extends [[DoorCard]].
 */
export class MonsterCard extends DoorCard {
  level: string;
  extra: string;
  badStuff: string;
  winLevels: number;
  winTreasures: number;

  constructor(o: any = null) {
    super(MonsterType, o);
    this.level = o?.level || "";
    this.extra = o?.extra || "";
    this.badStuff = o?.badStuff || "";
    this.winLevels = o?.winLevels || 1;
    this.winTreasures = o?.winTreasures || 1;
    this.layout = o?.layout || ImageTopLayout;
  }
}

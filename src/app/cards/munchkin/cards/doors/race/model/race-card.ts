import { DoorCard } from "../../door-card";
import { RaceType } from "./race-type";
import { ImageBottomLayout } from "src/app/cards/infrastructure/cards";

/**
 * Represents a race card. Extends [[DoorCard]].
 */
export class RaceCard extends DoorCard {

  firstAbility: string;

  secondAbility: string;

  constructor(o: any = null) {
    super(RaceType, o);
    this.firstAbility = o?.firstAbility || "";
    this.secondAbility = o?.secondAbility || "";
    this.layout = o?.layout || ImageBottomLayout;
  }
}

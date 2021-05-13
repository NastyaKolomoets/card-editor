import { DoorCard } from "../../door-card";
import { HirelingType } from "./hireling-type";
import { ImageBottomLayout } from "src/app/cards/infrastructure/cards";

/**
 * Represents a hireling card. Extends [[DoorCard]].
 */
export class HirelingCard extends DoorCard {

  bonus: string;

  constructor(o: any = null) {
    super(HirelingType, o);
    this.bonus = o?.bonus || "1";
    this.layout = o?.layout || ImageBottomLayout;
  }
}

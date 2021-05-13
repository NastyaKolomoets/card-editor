import { DoorCard } from "../../door-card";
import { CurseType } from "./curse-type";
import { ImageBottomLayout } from "src/app/cards/infrastructure/cards";

/**
 * Represents a curse card. Extends [[DoorCard]].
 */
export class CurseCard extends DoorCard {
  badStuff: string;

  constructor(o: any = null) {
    super(CurseType, o);
    this.badStuff = o?.badStuff || "";
    this.layout = o?.layout || ImageBottomLayout;
  }
}

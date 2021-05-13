import { DoorCard } from "../../door-card";
import { ClassType } from "./class-type";
import { ImageBottomLayout } from "src/app/cards/infrastructure/cards";

/**
 * Represents a class card. Extends [[DoorCard]].
 */
export class ClassCard extends DoorCard {

  firstAbilityName: string;
  firstAbilityDescription: string;

  secondAbilityName: string;
  secondAbilityDescription: string;

  constructor(o: any = null) {
    super(ClassType, o);
    this.firstAbilityDescription = o?.firstAbilityDescription || "";
    this.firstAbilityName = o?.firstAbilityName || "";
    this.secondAbilityDescription = o?.secondAbilityDescription || "";
    this.secondAbilityName = o?.secondAbilityName || "";
    this.layout = o?.layout || ImageBottomLayout;
  }
}

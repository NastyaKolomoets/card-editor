import { DoorCard } from "../../door-card";
import { MonsterEnhancerType } from "./monster-enhancer-type";
import { ImageBottomLayout } from "src/app/cards/infrastructure/cards";

/**
 * Represents a monster enhancer card. Extends [[DoorCard]].
 */
export class MonsterEnhancerCard extends DoorCard {

  enhancerValue: number;

  constructor(o: any = null) {
    super(MonsterEnhancerType, o);
    this.enhancerValue = o?.enhancerValue || 0;
    this.layout = o?.layout || ImageBottomLayout;
  }
}

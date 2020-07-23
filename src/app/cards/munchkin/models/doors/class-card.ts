import { DoorCard } from './door-card';
import { ClassType } from '../card-types/door-types';
import { ImageBottomLayout } from '../../../infrastructure/models/layouts/layouts';

/**
 * Represents a class card. Extends [[DoorCard]].
 */
export class ClassCard extends DoorCard {

  firstAbilityName: string;
  firstAbilityDescription: string;

  public get firstAbilityText(): string {
    return `<p><strong>${this.firstAbilityName}:</strong> ${this.firstAbilityDescription}`;
  }

  secondAbilityName: string;
  secondAbilityDescription: string;

  public get secondAbilityText(): string {
    return `<p><strong>${this.secondAbilityName}:</strong> ${this.secondAbilityDescription}`;
  }

  constructor(o: any = null) {
    super(ClassType, o);
    this.firstAbilityDescription = o?.firstAbilityDescription || '';
    this.firstAbilityName = o?.firstAbilityName || '';
    this.secondAbilityDescription = o?.secondAbilityDescription || '';
    this.secondAbilityName = o?.secondAbilityName || '';
    this.layout = o?.layout || ImageBottomLayout;
  }
}

import { CardType } from '../card-type';
import { DoorCard } from './door-card';
import { TwoTextFieldsLayout } from '../../layout/two-text-fields-layout';

/**
 * Represents a class card. Extends [[DoorCard]].
 */
export class ClassCard extends DoorCard {

  firstAbilityName: string;
  firstAbilityDescription: string;

  secondAbilityName: string;
  secondAbilityDescription: string;

  constructor(o: any = null) {
    super(CardType.CLASS);
    this.firstAbilityDescription = o?.firstAbilityDescription || '';
    this.firstAbilityName = o?.firstAbilityName || '';
    this.secondAbilityDescription = o?.secondAbilityDescription || '';
    this.secondAbilityName = o?.secondAbilityName || '';
    this.layout = o?.layout || TwoTextFieldsLayout.IMAGE_BOTTOM;
  }
}

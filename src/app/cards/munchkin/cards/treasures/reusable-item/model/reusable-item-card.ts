
import { ReusableItemType } from './reusable-item-type';
import { ImageBottomLayout } from 'src/app/cards/infrastructure/cards';
import { TreasureCard } from '../../treasure-card';

/**
 * Represents a reusable item card. Extends [[TreasureCard]].
 */
export class ReusableItemCard extends TreasureCard {

  bonus: string;
  specificity: string;
  kind: string;

  constructor(o: any = null) {
    super(ReusableItemType, o);
    this.bonus = o?.bonus || '1';
    this.specificity = o?.specificity || '';
    this.kind = o?.kind || '';
    this.layout = o?.layout || ImageBottomLayout;
  }
}


import { PermanentItemType } from './permanent-item-type';
import { ImageBottomLayout } from 'src/app/cards/infrastructure/cards';
import { TreasureCard } from '../../treasure-card';

/**
 * Represents a permanent item card. Extends [[TreasureCard]].
 */
export class PermanentItemCard extends TreasureCard {

  bonus: string;
  specificity: string;
  kind: string;

  constructor(o: any = null) {
    super(PermanentItemType, o);
    this.bonus = o?.bonus || '1';
    this.specificity = o?.specificity || '';
    this.kind = o?.kind || '';
    this.layout = o?.layout || ImageBottomLayout;
  }
}

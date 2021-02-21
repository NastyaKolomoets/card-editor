import { SingleUseItemType } from './single-use-item-type';
import { ImageBottomLayout } from 'src/app/cards/infrastructure/cards';
import { TreasureCard } from '../../treasure-card';

/**
 * Represents a single use item card. Extends [[TreasureCard]].
 */
export class SingleUseItemCard extends TreasureCard {

  constructor(o: any = null) {
    super(SingleUseItemType, o);
    this.layout = o?.layout || ImageBottomLayout;
  }
}

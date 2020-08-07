
import { DisposableItemType } from './disposable-item-type';
import { ImageBottomLayout } from 'src/app/cards/infrastructure/cards';
import { TreasureCard } from '../../treasure-card';

/**
 * Represents a disposable item card. Extends [[DoorCard]].
 */
export class DisposableItemCard extends TreasureCard {

  constructor(o: any = null) {
    super(DisposableItemType, o);
    this.layout = o?.layout || ImageBottomLayout;
  }
}

import { DoorCard } from '../../door-card';
import { OtherDoorType } from './other-door-type';
import { ImageBottomLayout } from 'src/app/cards/infrastructure/cards';

/**
 * Represents a other door card. Extends [[DoorCard]].
 */
export class OtherDoorCard extends DoorCard {

  constructor(o: any = null) {
    super(OtherDoorType, o);
    this.layout = o?.layout || ImageBottomLayout;
  }
}


import { LevelUpType } from './level-up-type';
import { LargeTextLayout } from 'src/app/cards/infrastructure/cards';
import { TreasureCard } from '../../treasure-card';

/**
 * Represents a single-use item card. Extends [[TreasureCard]].
 */
export class LevelUpCard extends TreasureCard {

  constructor(o: any = null) {
    super(LevelUpType, o);
    this.layout = o?.layout || LargeTextLayout;
  }
}

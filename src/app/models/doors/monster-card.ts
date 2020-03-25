import { DoorCard } from './door-card';
import { CardType } from '../card-type';
import { TwoTextFieldsLayout } from '../layouts/two-text-fields-layout';

export class MonsterCard extends DoorCard {
  level: string;
  extra: string;
  badStuff: string;
  winLevels: number;
  winTreasures: number;

  constructor(o: any = null) {
    super(CardType.MONSTER);
    this.level = o?.level || 'Рівень 1';
    this.extra = o?.extra || '';
    this.badStuff = o?.badStuff || '<p><strong>Паскудство:</strong> </p>';
    this.winLevels = o?.winLevels || 1;
    this.winTreasures = o?.winTreasures || 1;
    this.layout = o?.layout || TwoTextFieldsLayout.IMAGE_TOP;
  }
}

import { DoorCard } from './door-card';
import { CardType } from '../card-type';

export class MonsterCard extends DoorCard {
  level: string;
  extra: string;
  badStuff: string;
  winLevels: number;
  winTreasures: number;

  constructor() {
    super(CardType.MONSTER);
    this.level = 'Рівень 1';
    this.extra = '';
    this.badStuff = '<p><strong>Паскудство:</strong> </p>';
    this.winLevels = 1;
    this.winTreasures = 1;
  }
}

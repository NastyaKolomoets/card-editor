import { DoorCard } from './door-card';
import { CardType } from '../card-type';

export class MonsterCard extends DoorCard {
  level: string;
  extra: string;
  baddStuff: string;
  winLevels: number;
  winTreasures: number;

  constructor(name: string) {
    super(name, CardType.MONSTER);
    this.level = '1';
    this.extra = '';
    this.baddStuff = '';
    this.winLevels = 1;
    this.winTreasures = 1;
  }
}

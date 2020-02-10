import { DoorCard } from './door-card';

export class MonsterCard extends DoorCard {
  level: string;
  extra: string;
  baddStuff: string;
  winLevels: number;
  winTreasures: number;

  constructor(name: string) {
    super(name);
    this.level = '1';
    this.extra = null;
    this.baddStuff = null;
    this.winLevels = 1;
    this.winTreasures = 1;
  }
}

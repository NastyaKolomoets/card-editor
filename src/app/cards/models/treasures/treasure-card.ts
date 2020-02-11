import { ICard } from '../card';

export class TreasureCard implements ICard {
  key: string;
  type: string;
  name: string;  description: string;
  img: string;

  constructor(name: string) {
    this.name = name;
    this.img = '';
  }

  getBackgroungImg(): string {
    return '../assets/door_back.png';
  }
}

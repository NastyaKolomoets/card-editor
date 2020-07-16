import { ICard } from '../card';
import { CardType } from '../card-type';

export class TreasureCard implements ICard {
  key: string;
  type: CardType;
  name: string;
  description: string;
  img: string;
  layout: number;

  constructor(name: string) {
    this.name = name;
    this.img = '';
    this.layout = null;
  }
}

import { ICard } from '../card';
import { CardType } from '../card-type';

export class DoorCard implements ICard {
  key: string;
  type: CardType;
  name: string;
  description: string;
  img: string;
  layout: number;

  constructor(type: CardType) {
    this.key = null;
    this.type = type;
    this.name = '';
    this.description = '';
    this.img = '';
    this.layout = null;
  }
}

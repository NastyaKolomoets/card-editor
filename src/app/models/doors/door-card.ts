import { ICard } from '../card';
import { CardTypeDetails } from '../types/card-type-details';
import { CardType } from '../card-type';

export class DoorCard implements ICard {
  key: string;
  type: CardType;
  name: string;
  description: string;
  img: string;

  constructor(type: CardType) {
    this.key = null;
    this.type = type;
    this.name = '';
    this.description = '';
    this.img = '';
  }
}

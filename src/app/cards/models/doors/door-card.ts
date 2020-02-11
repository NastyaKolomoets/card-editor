import { ICard } from '../card';
import { CardTypeDetails } from '../types/card-type-details';
import { CardType } from '../card-type';

export class DoorCard implements ICard {
  key: string;
  type: CardType;
  name: string;
  description: string;
  img: string;

  constructor(name: string, type: CardType) {
    this.type = type;
    this.name = name;
    this.description = '';
    this.img = '';
  }
}

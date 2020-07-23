import { Card } from '../../../infrastructure/models/card';
import { CardType } from '../../../infrastructure/models/card-type';

export class DoorCard extends Card {
  constructor(type: CardType, obj: any) {
    super(type, obj);
    this.backgroundImg = '../assets/doors_back.png';
  }
}

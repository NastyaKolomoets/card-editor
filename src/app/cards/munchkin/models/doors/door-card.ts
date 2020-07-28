import { Card } from '../../../infrastructure/card/card-model/card';
import { CardType } from '../../../infrastructure/card/card-model/card-type';

export class DoorCard extends Card {
  constructor(type: CardType, obj: any) {
    super(type, obj);
    this.backgroundImg = '../assets/doors_back.png';
  }
}

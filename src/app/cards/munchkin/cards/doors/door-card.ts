import { Card, CardType } from 'src/app/cards/infrastructure/cards';

export class DoorCard extends Card {
  constructor(type: CardType, obj: any) {
    super(type, obj);
    this.backgroundImg = '../assets/doors_back.png';
  }
}

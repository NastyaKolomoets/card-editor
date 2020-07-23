import { Card } from '../../../infrastructure/models/card';
import { CardType } from '../../../infrastructure/models/card-type';

export class TreasureCard extends Card {
  // key: string;
  // type: CardType;
  // name: string;
  // description: string;
  // img: string;
  // layout: number;

  constructor(type: CardType, obj: any) {
    super(type, obj);
  }

  static backgroundImage = '';
}

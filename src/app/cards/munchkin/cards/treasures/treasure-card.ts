import { Card } from '../../../infrastructure/card/card-model/card';
import { CardType } from '../../../infrastructure/card/card-model/card-type';

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

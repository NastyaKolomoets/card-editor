import { CardType } from './card-type';
import { Layout } from './layouts/layout';

export class Card {
  key: string;
  type: CardType;
  name: string;
  description: string;
  img: string;
  layout: Layout;
  backgroundImg: string;

  constructor(type: CardType, obj: any) {
    this.key = obj?.key || null;
    this.type = type;
    this.name = obj?.name || '';
    this.description = obj?.description || '';
    this.img = obj?.img || '';
    this.layout = obj?.layout || null;
  }
}

import { CardType } from './card-type';

export interface ICard {
  key: string;
  type: CardType;
  name: string;
  description: string;
  img: string;
  layout: number;
}

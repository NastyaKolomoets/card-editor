import { Card } from './card';
import { CardType } from './card-type';

export interface CardFactory {
  createCard(cardType: CardType): Card;
  mapCard(obj: any): Card;
}

import { Card, CardType } from '../../card/card';

export interface CardResolver {
  createCard(cardType: CardType): Card;
  mapCard(obj: any): Card;
}

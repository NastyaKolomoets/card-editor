import { CardResolver } from '../deck-model/card-resolver';
import { CardType, Card } from '../../card/card';

export class CardFactory {
  constructor(private cardResolver: CardResolver) { }

  createCard(type: CardType): Card {
    return this.cardResolver.createCard(type);
  }

  mapToCard(obj: any): Card {
    return this.cardResolver.mapCard(obj);
  }
}

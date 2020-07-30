import { CardType, CardGroup, Card, CardTemplate } from '../../cards';
import { EditCardTemplate } from '../edit-card-modal/edit-card/edit-card-template';
import { Type } from '@angular/core';

export interface CardTypeConfig {
  cardType: CardType;
  belongsToGroup: CardGroup;
  useCard: Type<Card>;
  useCardTemplate?: Type<CardTemplate>;
  useEditTemplate?: Type<EditCardTemplate>;
}

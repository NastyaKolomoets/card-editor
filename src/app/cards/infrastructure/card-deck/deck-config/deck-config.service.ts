import { Injectable, Type } from '@angular/core';
import { DeckConfig } from '../deck-config/deck-config';
import { CardGroup } from '../card-deck';
import { CardType, Card, CardTemplate } from '../../card/card';
import { EditCardTemplate } from '../edit-card-modal/edit-card/edit-card-template';

@Injectable({
  providedIn: 'root'
})
export class DeckConfigService {
  groups: CardGroup[];
  cardTypes: Map<string, CardType[]>;
  cards: Map<string, Type<Card>>;
  cardTemplates: Map<string, Type<CardTemplate> | undefined>;
  editTemplates: Map<string, Type<EditCardTemplate> | undefined>;

  constructor(deck: DeckConfig) {
    this.groups = Array.from(new Set(deck.config.map(x => x.belongsToGroup)));
    this.cardTypes = new Map(this.groups.map(x => [x.name, deck.config.filter(c => c.belongsToGroup === x).map(c => c.cardType)]));
    this.cards = new Map(deck.config.map(x => [x.cardType.name, x.useCard]));
    this.cardTemplates = new Map(deck.config.map(x => [x.cardType.name, x.useCardTemplate]));
    this.editTemplates = new Map(deck.config.map(x => [x.cardType.name, x.useEditTemplate]));
  }
}

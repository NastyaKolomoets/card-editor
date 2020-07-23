import { Injectable } from '@angular/core';
import { DeckConfig } from '../models/config';
import { CardGroup } from '../models/card-group';
import { CardFactory } from '../models/card-factory';

@Injectable()
export class ConfigService {
  groups: CardGroup[];
  factory: CardFactory;

  constructor(deckConfig: DeckConfig) {
    this.groups = deckConfig.cardGroups;
    this.factory = deckConfig.cardFactory;
  }
}

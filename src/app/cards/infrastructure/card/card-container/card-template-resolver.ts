import { TemplateResolver } from '../../template/template';
import { CardType, CardTemplate } from '../card';
import { Type, Injectable } from '@angular/core';
import { DeckConfigService } from '../../card-deck/deck-config/deck-config.service';

@Injectable()
export class CardTemplateResolver implements TemplateResolver<CardType> {

  constructor(private deckConfig: DeckConfigService) { }

  getTemplateType(type: CardType): Type<CardTemplate> {
    return this.deckConfig.cardTemplates.get(type.name);
  }
}

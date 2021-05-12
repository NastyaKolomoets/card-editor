import { TemplateResolver } from '../../template/template';
import { CardType, CardTemplate } from '../card';
import { Type, Injectable } from '@angular/core';
import { DeckConfigService } from '../../card-deck/deck-config/deck-config.service';

@Injectable()
export class CardTemplateResolver implements TemplateResolver<CardType, CardTemplate> {

  constructor(private deckConfig: DeckConfigService) { }

  getTemplateType(type: CardType): Type<CardTemplate> {
    const templateType = this.deckConfig.cardTemplates.get(type.name);
    if (templateType === undefined) {
      throw new Error(`Couldn't bind to any type with name ${type.name}`);
    }
    return templateType;
  }
}

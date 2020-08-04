import { Injectable, Type } from '@angular/core';
import { TemplateResolver } from '../../../template/template';
import { CardType } from '../../../card/card';
import { DeckConfigService } from '../../deck-config/deck-config.service';
import { EditCardTemplate } from './edit-card-template';

@Injectable()
export class EditTemplateResolver implements TemplateResolver<CardType> {

  constructor(private deckConfig: DeckConfigService) { }

  getTemplateType(type: CardType): Type<EditCardTemplate> {
    return this.deckConfig.editTemplates.get(type.name);
  }
}

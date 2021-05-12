import { Injectable, Type } from '@angular/core';
import { TemplateResolver } from '../../../template/template';
import { CardType } from '../../../card/card';
import { DeckConfigService } from '../../deck-config/deck-config.service';
import { EditCardTemplate } from './edit-card-template';

@Injectable()
export class EditTemplateResolver implements TemplateResolver<CardType, EditCardTemplate> {

  constructor(private deckConfig: DeckConfigService) { }

  getTemplateType(type: CardType): Type<EditCardTemplate> {
    const templateType = this.deckConfig.editTemplates.get(type.name);
    if (templateType === undefined) {
      throw new Error(`Couldn't bind to any type with name ${type.name}`);
    }
    return templateType;
  }
}

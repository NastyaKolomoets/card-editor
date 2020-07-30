import { Injectable } from '@angular/core';
import { CardType } from '../card';
import { TemplateService } from '../../template/template';
import { CardTemplateResolver } from './card-template-resolver';

@Injectable()
export class CardTemplateService extends TemplateService<CardType> {
  constructor(templateResolver: CardTemplateResolver) {
    super(templateResolver);
  }
}

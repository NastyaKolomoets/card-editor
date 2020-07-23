import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { TemplateItem } from '../template/template-item';
import { TemplateResolver } from '../template/template-resolver';

@Injectable()
export class TemplateService {
  constructor(private templateResolver: TemplateResolver) { }

  getTemplate(card: Card): TemplateItem {
    return new TemplateItem(this.templateResolver.getType(card.type), card);
  }
}

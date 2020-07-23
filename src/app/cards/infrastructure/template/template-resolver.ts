import { Type } from '@angular/core';
import { CardType } from '../models/card-type';

export class TemplateResolver {
  getType(cardType: CardType): Type<any> {
    return null;
  }
}

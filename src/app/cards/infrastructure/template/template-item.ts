import { Type } from '@angular/core';
import { Card } from '../models/card';

export class TemplateItem {
  constructor(public component: Type<any>, public card: Card) { }
}

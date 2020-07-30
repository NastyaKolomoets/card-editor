import { Type } from '@angular/core';
import { TemplateResolver } from '../infrastructure/template/template';
import { CardType, CardTemplate } from '../infrastructure/cards';
import { MonsterType, MonsterCardComponent } from './cards/doors/monster/monster';
import { ClassType, ClassCardComponent } from './cards/doors/class/class';

export class MunchkinCardTemplateResolver implements TemplateResolver<CardType> {
  getTemplateType(cardType: CardType): Type<CardTemplate> {
    switch (cardType.name) {
      case MonsterType.name:
        return MonsterCardComponent;
      case ClassType.name:
        return ClassCardComponent;
      default:
        return null;
    }
  }
}

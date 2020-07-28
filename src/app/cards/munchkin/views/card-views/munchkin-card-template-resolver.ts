import { TemplateResolver } from 'src/app/cards/infrastructure/template/template-resolver';
import { CardType } from 'src/app/cards/infrastructure/card/card-model/card-type';
import { Type } from '@angular/core';
import { MonsterType, ClassType } from '../../models/card-types/door-types';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { ClassCardComponent } from './class-card/class-card.component';

export class MunchkinCardTemplateResolver implements TemplateResolver<CardType> {
  getTemplateType(cardType: CardType): Type<any> {
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

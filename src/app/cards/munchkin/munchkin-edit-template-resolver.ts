import { Type } from '@angular/core';
import { TemplateResolver } from '../infrastructure/template/template';
import { CardType } from '../infrastructure/cards';
import { MonsterType, MonsterEditComponent } from './cards/doors/monster/monster';
import { ClassType } from './cards/doors/class/class';


export class MunchkinEditTemplateResolver implements TemplateResolver<CardType> {
  getTemplateType(cardType: CardType): Type<any> {
    switch (cardType.name) {
      case MonsterType.name:
        return MonsterEditComponent;
      case ClassType.name:
      //   return ClassEditComponent;
      default:
        return null;
    }
  }
}

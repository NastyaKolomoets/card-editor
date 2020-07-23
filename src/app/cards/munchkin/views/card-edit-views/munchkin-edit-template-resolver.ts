import { TemplateResolver } from 'src/app/cards/infrastructure/template/template-resolver';
import { CardType } from 'src/app/cards/infrastructure/models/card-type';
import { Type } from '@angular/core';
import { MonsterType, ClassType } from '../../models/card-types/door-types';
import { MonsterEditComponent } from './monster-edit/monster-edit.component';

export class MunchkinEditTemplateResolver implements TemplateResolver {
  getType(cardType: CardType): Type<any> {
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

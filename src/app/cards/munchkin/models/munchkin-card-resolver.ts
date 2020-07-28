import { MonsterCard } from './doors/monster-card';
import { Card } from '../../infrastructure/card/card-model/card';
import { Injectable } from '@angular/core';
import { ClassCard } from './doors/class-card';
import { CardResolver } from '../../infrastructure/card-deck/deck-model/card-resolver';
import { MonsterType, ClassType } from './card-types/door-types';
import { CardType } from '../../infrastructure/card/card-model/card-type';

@Injectable({
  providedIn: 'root'
})
export class MunchkinCardResolver implements CardResolver {
  createCard(type: CardType): Card {
    switch (type.name) {
      case MonsterType.name:
        return new MonsterCard();
      case ClassType.name:
        return new ClassCard();
      default:
        return null;
    }
  }

  mapCard(obj: any): Card {
    switch (obj.type) {
      case MonsterType.name:
        return new MonsterCard(obj);
      case ClassType.name:
        return new ClassCard(obj);
      default:
        return null;
    }
  }
}

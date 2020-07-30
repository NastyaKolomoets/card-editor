import { Injectable } from '@angular/core';
import { CardResolver, CardType, Card } from '../infrastructure/cards';
import { MonsterType, MonsterCard } from './cards/doors/monster/monster';
import { ClassType, ClassCard } from './cards/doors/class/class';

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

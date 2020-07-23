import { MonsterCard } from './doors/monster-card';
import { Card } from '../../infrastructure/models/card';
import { Injectable } from '@angular/core';
import { ClassCard } from './doors/class-card';
import { CardFactory } from '../../infrastructure/models/card-factory';
import { MonsterType, ClassType } from './card-types/door-types';
import { CardType } from '../../infrastructure/models/card-type';

@Injectable({
  providedIn: 'root'
})
export class MunchkinCardFactory implements CardFactory {
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

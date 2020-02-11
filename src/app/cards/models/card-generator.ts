import { CardType } from './card-type';
import { MonsterCard } from './doors/monster-card';
import { ICard } from './card';
import { DoorCard } from './doors/door-card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardGenerator {
  generateCard(type: string, name: string): ICard {
    switch (type) {
      case CardType.MONSTER:
        return new MonsterCard(name);
      default:
        return null;
    }
  }
}

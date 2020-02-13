import { CardType } from '../card-type';
import { MonsterCard } from '../doors/monster-card';
import { ICard } from '../card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardGeneratorHelper {
  static generateCard(type: string): ICard {
    switch (type) {
      case CardType.MONSTER:
        return new MonsterCard();
      default:
        return null;
    }
  }
}

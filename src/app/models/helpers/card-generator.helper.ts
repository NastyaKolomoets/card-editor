import { CardType } from '../card-type';
import { MonsterCard } from '../doors/monster-card';
import { ICard } from '../card';
import { Injectable } from '@angular/core';
import { ClassCardComponent } from 'src/app/cards/class-card/class-card.component';
import { ClassCard } from '../doors/class-card';

@Injectable({
  providedIn: 'root'
})
export class CardGeneratorHelper {
  static generateCard(type: string): ICard {
    switch (type) {
      case CardType.MONSTER:
        return new MonsterCard();
      case CardType.CLASS:
        return new ClassCard();
      default:
        return null;
    }
  }
}

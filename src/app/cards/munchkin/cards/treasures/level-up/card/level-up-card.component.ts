import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { LevelUpCard } from '../model/level-up-card';

@Component({
  selector: 'app-level-up-card',
  templateUrl: './level-up-card.component.html'
})
export class LevelUpCardComponent implements CardTemplate {
  @Input() card: LevelUpCard;

  readonly levelUp = 'Отримай рівень';
}

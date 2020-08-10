import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { HirelingCard } from '../model/hireling-card';

@Component({
  selector: 'app-hireling-card',
  templateUrl: './hireling-card.component.html'
})
export class HirelingCardComponent implements CardTemplate {
  @Input() card: HirelingCard;

  readonly hirelingText: string = 'Наймит';

  get bonus() {
    return `Бонус +${this.card.bonus}`;
  }
}

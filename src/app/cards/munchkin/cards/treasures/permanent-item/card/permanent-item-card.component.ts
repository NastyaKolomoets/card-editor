import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { PermanentItemCard } from '../model/permanent-item-card';

@Component({
  selector: 'app-permanent-item-card',
  templateUrl: './permanent-item-card.component.html'
})
export class PermanentItemCardComponent implements CardTemplate {
  @Input() card: PermanentItemCard;

  get bonus() {
    return this.card.bonus ? `Бонус +${this.card.bonus}` : '';
  }

  get huge() {
    return this.card.isHuge ? 'Велика' : '';
  }

  get leftText() {
    return this.card.isHuge
      ? `${this.card.kind} ${this.huge}`
      : this.card.kind;
  }
}

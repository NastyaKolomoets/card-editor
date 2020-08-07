import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { DisposableItemCard } from '../model/disposable-item-card';

@Component({
  selector: 'app-disposable-item-card',
  templateUrl: './disposable-item-card.component.html'
})
export class DisposableItemCardComponent implements CardTemplate {
  @Input() card: DisposableItemCard;
}

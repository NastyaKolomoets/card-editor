import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { SingleUseItemCard } from '../model/single-use-item-card';

@Component({
  selector: 'app-single-use-item-card',
  templateUrl: './single-use-item-card.component.html'
})
export class SingleUseItemCardComponent implements CardTemplate {
  @Input() card: SingleUseItemCard;
}

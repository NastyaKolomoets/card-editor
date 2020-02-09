import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/cards/models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: 'card.item.component.html',
  styleUrls: ['card.item.component.css']
})
export class CardItemComponent {
  @Input() card: ICard;
  @Input() backgroundImg: string;

  constructor() {
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: 'card-item.component.html',
  styleUrls: ['card-item.component.css']
})
export class CardItemComponent {
  @Input() backgroundImg: string;
}

import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})

export class EditCardComponent {
  @Input()
  card: ICard;
}

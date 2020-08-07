import { Component, Input } from '@angular/core';
import { EditCardTemplate } from 'src/app/cards/infrastructure/cards';
import { PermanentItemCard } from '../model/permanent-item-card';

@Component({
  selector: 'app-permanent-item-edit',
  templateUrl: './permanent-item-edit.component.html'
})

export class PermanentItemEditComponent implements EditCardTemplate {
  @Input()
  card: PermanentItemCard;
}

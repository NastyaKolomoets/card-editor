import { Component, Input } from '@angular/core';
import { EditCardTemplate } from 'src/app/cards/infrastructure/cards';
import { DisposableItemCard } from '../model/disposable-item-card';

@Component({
  selector: 'app-disposable-item-edit',
  templateUrl: './disposable-item-edit.component.html'
})

export class DisposableItemEditComponent implements EditCardTemplate {
  @Input()
  card: DisposableItemCard;
}

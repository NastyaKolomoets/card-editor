import { Component, Input } from '@angular/core';
import { MonsterCard } from 'src/app/cards/munchkin/cards/doors/monster/model/monster-card';

@Component({
  selector: 'app-monster-edit',
  templateUrl: './monster-edit.component.html'
})

export class MonsterEditComponent {
  @Input()
  card: MonsterCard;
}

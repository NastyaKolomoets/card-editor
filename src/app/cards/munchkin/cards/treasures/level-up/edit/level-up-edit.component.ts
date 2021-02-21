import { Component, Input } from '@angular/core';
import { EditCardTemplate } from 'src/app/cards/infrastructure/cards';
import { LevelUpCard } from '../model/level-up-card';

@Component({
  selector: 'app-level-up-edit',
  templateUrl: './level-up-edit.component.html'
})

export class LevelUpEditComponent implements EditCardTemplate {
  @Input()
  card: LevelUpCard;
}

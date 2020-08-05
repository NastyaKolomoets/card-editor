import { Component, Input } from '@angular/core';
import { CurseCard } from '../curse';
import { EditCardTemplate } from 'src/app/cards/infrastructure/cards';

@Component({
  selector: 'app-curse-edit',
  templateUrl: './curse-edit.component.html'
})

export class CurseEditComponent implements EditCardTemplate {
  @Input()
  card: CurseCard;
}

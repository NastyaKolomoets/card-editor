import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { CurseCard } from '../model/curse-card';

@Component({
  selector: 'app-curse-card',
  templateUrl: './curse-card.component.html',
  styleUrls: ['./curse-card.component.css']
})
export class CurseCardComponent implements CardTemplate {
  @Input() card: CurseCard;

  readonly curseText: string = 'Прокляття!';
}

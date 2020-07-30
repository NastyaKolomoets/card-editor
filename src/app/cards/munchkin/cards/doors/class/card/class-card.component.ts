import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { ClassCard } from '../model/class-card';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html'
})
export class ClassCardComponent implements CardTemplate {
  @Input() card: ClassCard;

  public readonly classText: string = 'Клас';
}

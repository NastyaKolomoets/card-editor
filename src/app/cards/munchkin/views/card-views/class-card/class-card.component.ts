import { Component, Input } from '@angular/core';
import { ClassCard } from '../../../models/doors/class-card';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html'
})
export class ClassCardComponent implements CardTemplate {
  @Input() card: ClassCard;

  public readonly classText: string = 'Клас';
}

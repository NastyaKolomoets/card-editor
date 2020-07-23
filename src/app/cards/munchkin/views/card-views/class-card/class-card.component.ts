import { Component, Input } from '@angular/core';
import { ClassCard } from '../../../models/doors/class-card';
import { Template } from 'src/app/cards/infrastructure/template/template';
@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements Template {
  @Input() card: ClassCard;

  public readonly classText: string = 'Клас';
}

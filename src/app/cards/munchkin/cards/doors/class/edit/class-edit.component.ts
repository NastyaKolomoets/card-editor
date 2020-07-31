import { Component, Input } from '@angular/core';
import { ClassCard } from '../class';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html'
})

export class ClassEditComponent {
  @Input()
  card: ClassCard;
}

import { Component, OnInit, Input } from '@angular/core';
import { ClassCard } from 'src/app/models/doors/class-card';
import { DoorCardComponent } from '../door-card/door-card.component';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent extends DoorCardComponent {
  @Input() card: ClassCard;
  @Input() isEditing: boolean;

  public readonly classText: string = "Клас";

  ngOnInit(): void {
  }

}

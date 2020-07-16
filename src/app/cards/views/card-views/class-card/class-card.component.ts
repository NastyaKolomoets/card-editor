import { Component, OnInit, Input } from '@angular/core';
import { ClassCard } from 'src/app/cards/models/card/doors/class-card';
import { getDoorsBackgroundImg } from 'src/app/cards/views/card-views/helpers/helpers';
@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent {
  @Input() card: ClassCard;

  public readonly classText: string = 'Клас';

  get backgroundImg() {
    // return this.card.backgroundImage();
    return getDoorsBackgroundImg();
  }
}

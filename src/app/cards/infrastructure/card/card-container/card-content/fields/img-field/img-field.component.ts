import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img-field',
  templateUrl: './img-field.component.html'
})

export class ImgFieldComponent {
  @Input()
  img: string;

  @Output()
  imgChange = new EventEmitter<string>();
}

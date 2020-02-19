import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-field',
  templateUrl: './img-field.component.html'
})

export class ImgFieldComponent {
  @Input()
  img: string;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-text-fields',
  template: ''
})

export class TwoTextFieldsComponent {
  @Input() imgPosition: number;

  @Input()
  firstText: string;

  @Input()
  secondText: string;

  @Input()
  imgUrl: string;
}

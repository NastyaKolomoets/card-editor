import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-one-text-field',
  template: ''
})
export class OneTextFieldComponent {
  @Input() imgPosition: number;

  @Input()
  text: string;

  @Input()
  imgUrl: string;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-number',
  templateUrl: './editable-number.component.html',
  styleUrls: ['./editable-number.component.css']
})
export class EditableNumberComponent {

  @Input() label: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  numberValue: number;
  @Output() numberChange = new EventEmitter();
  @Input()
  get number() {
    return this.numberValue;
  }
  set number(val) {
    this.numberValue = val;
    this.numberChange.emit(this.numberValue);
  }
}

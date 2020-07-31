import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-string',
  templateUrl: './editable-string.component.html',
  styleUrls: ['./editable-string.component.css']
})
export class EditableStringComponent {

  @Input() label: string;

  stringValue: string;
  @Output() stringChange = new EventEmitter();
  @Input()
  get string() {
    return this.stringValue;
  }
  set string(val) {
    this.stringValue = val;
    this.stringChange.emit(this.stringValue);
  }
}

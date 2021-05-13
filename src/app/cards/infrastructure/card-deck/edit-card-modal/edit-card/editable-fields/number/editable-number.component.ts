import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-editable-number",
  templateUrl: "./editable-number.component.html",
  styleUrls: ["./editable-number.component.css"]
})
export class EditableNumberComponent {

  @Input() label: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  @Output() numberChange = new EventEmitter();
  numberValue: number;
  @Input()
  get value() {
    return this.numberValue;
  }
  set value(val) {
    this.numberValue = val;
    this.numberChange.emit(this.numberValue);
  }
}

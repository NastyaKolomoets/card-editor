import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-editable-number",
  templateUrl: "./editable-number.component.html",
  styleUrls: ["./editable-number.component.scss"]
})
export class EditableNumberComponent {

  @Input() label: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  @Output() valueChange = new EventEmitter();
  numberValue: number;
  @Input()
  get value() {
    return this.numberValue;
  }
  set value(val) {
    this.numberValue = val;
    this.valueChange.emit(this.numberValue);
  }
}

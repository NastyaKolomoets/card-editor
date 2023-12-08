import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-editable-string",
  templateUrl: "./editable-string.component.html",
  styleUrls: ["./editable-string.component.css"]
})
export class EditableStringComponent {

  @Input() label: string;

  @Output() valueChange = new EventEmitter();
  stringValue: string;
  @Input()
  get value() {
    return this.stringValue;
  }
  set value(val) {
    this.stringValue = val;
    this.valueChange.emit(this.stringValue);
  }
}

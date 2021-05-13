import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html"
})

export class TextFieldComponent {
  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();
}

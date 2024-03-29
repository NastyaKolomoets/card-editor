import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-editable-rich-text",
  templateUrl: "./editable-rich-text.component.html",
  styleUrls: ["./editable-rich-text.component.scss"]
})
export class EditableRichTextComponent {

  @Input()
  multiline = false;

  @Input()
  label: string;

  @Output() textChange = new EventEmitter();
  textValue: string;
  @Input()
  get text() {
    return this.textValue;
  }
  set text(val) {
    this.textValue = val;
    this.textChange.emit(this.textValue);
  }

  get options() {
    return {
      toolbarButtonsXS: {
        moreText: {
          buttons: ["bold", "italic", "underline"]
        },
        moreParagraph: {
          buttons: ["alignLeft", "alignCenter", "alignRight"]
        }
      },
      toolbarInline: true,
      toolbarVisibleWithoutSelection: true,
      multiLine: this.multiline || false,
      charCounterCount: false,
      attribution: false,
      quickInsertEnabled: false
    };
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-text-field',
  templateUrl: './editable-text-field.component.html'
})
export class EditableTextFieldComponent {

  @Input()
  multiline = false;

  @Input()
  label: string;

  textValue: string;
  @Output() textChange = new EventEmitter();
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
          buttons: ['bold', 'italic', 'underline']
        },
        moreParagraph: {
          buttons: ['alignLeft', 'alignCenter', 'alignRight']
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

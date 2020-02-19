import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html'
})

export class TextFieldComponent {
  @Input() isEditing = false;
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


  options: object = {
    toolbarButtons: {
      moreText: {
        buttons: ['bold', 'italic', 'underline']
      },
      moreParagraph: {
        buttons: ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify']
      },
      moreMisc: {
        buttons: ['undo', 'redo'],
        align: 'right'
      }
    },
    toolbarInline: true,
    charCounterCount: false,
    attribution: false,
    quickInsertEnabled: false
  };

  get showField(): boolean {
    return this.isEditing || (this.textValue !== null && this.textValue !== '');
  }
}

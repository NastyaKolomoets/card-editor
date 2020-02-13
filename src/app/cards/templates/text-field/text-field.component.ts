import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})

export class TextFieldComponent {
  @Input() text: string;

  options: object = {
    toolbarButtons: {
      moreText: {
        buttons: ['bold', 'italic', 'underline']
      },
      moreParagraph: {
        buttons: ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify']
      },
      moreMisc: {
        buttons: ['undo', 'redo', 'print'],
        align: 'right'
      }
    },
    toolbarInline: true,
    charCounterCount: false,
    attribution: false
  };
}

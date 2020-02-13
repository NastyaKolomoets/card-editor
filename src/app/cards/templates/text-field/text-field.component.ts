import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})

export class TextFieldComponent {
  @Input() text: string;
  text1 = 'test1';

  options = {
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    editInPopup: true
  };
}

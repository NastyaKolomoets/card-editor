import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-text-fields',
  templateUrl: './two-text-fields.component.html',
  styleUrls: ['./two-text-fields.component.css']
})

export class TwoTextFieldsComponent {
  @Input() imgPosition: string;

  firstTextValue: string;
  @Output() firstTextChange = new EventEmitter();

  @Input()
  get firstText() {
    return this.firstTextValue;
  }
  set firstText(val) {
    this.firstTextValue = val;
    this.firstTextChange.emit(this.firstTextValue);
  }

  secondTextValue: string;
  @Output() secondTextChange = new EventEmitter();

  @Input()
  get secondText() {
    return this.secondTextValue;
  }
  set secondText(val) {
    this.secondTextValue = val;
    this.secondTextChange.emit(this.secondTextValue);
  }

  imgUrlValue: string;
  @Output() imgUrlChange = new EventEmitter();

  @Input()
  get imgUrl() {
    return this.imgUrlValue;
  }
  set imgUrl(val) {
    this.imgUrlValue = val;
    this.imgUrlChange.emit(this.imgUrlValue);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-field',
  templateUrl: './img-field.component.html'
})

export class ImgFieldComponent {
  @Input() isEditing = false;
  imgValue: string;
  @Output() imgChange = new EventEmitter();

  @Input()
  get img() {
    return this.imgValue;
  }
  set img(val) {
    this.imgValue = val;
    this.imgObj = {
      ...this.imgObj,
      src: this.imgValue
    };
    this.imgChange.emit(this.img);
  }

  imgObj = {
      src: this.imgValue
  };

  options: object = {
    toolbarButtons: ['alignLeft', 'alignCenter', 'alignRight'],
    toolbarInline: true,
    charCounterCount: false,
    attribution: false
  };
}

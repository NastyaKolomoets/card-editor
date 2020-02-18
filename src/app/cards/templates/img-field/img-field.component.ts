import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-field',
  templateUrl: './img-field.component.html'
})

export class ImgFieldComponent {
  @Input() isEditing = false;
  imgUrlValue: string;
  @Output() imgUrlChange = new EventEmitter();

  @Input()
  get imgUrl() {
    return this.imgUrlValue;
  }
  set imgUrl(val) {
    this.imgUrlValue = val;
    this.imgUrlChange.emit(this.imgUrl);
  }


  options: object = {
    imageEditButtons: [
      'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'
    ],
    // imageUploadURL: this.imgUrl,
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    toolbarInline: true,
    charCounterCount: false,
    attribution: false
  };

  img: object = {
    src: this.imgUrl
  };
}

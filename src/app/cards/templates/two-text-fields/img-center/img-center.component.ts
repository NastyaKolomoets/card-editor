import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-center',
  templateUrl: './img-center.component.html'
})

export class ImgCenterComponent {
  @Input() topText: string;
  @Input() bottomText: string;
  @Input() img: string;
}

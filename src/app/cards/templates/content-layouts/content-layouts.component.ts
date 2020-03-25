import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-layouts',
  templateUrl: './content-layouts.component.html'
})

export class ContentLayoutsComponent {
  @Input() layoutType: number;

  @Input()
  firstText: string;

  @Input()
  secondText: string;

  @Input()
  imgUrl: string;
}

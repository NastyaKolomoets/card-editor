import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: ''
})
export class ContentLayoutBaseComponent {
  @Input() firstText: string;
  @Input() secondText: string;
  @Input() imgUrl: string;
}

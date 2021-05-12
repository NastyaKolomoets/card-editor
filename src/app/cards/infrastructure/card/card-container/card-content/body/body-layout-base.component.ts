import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: ''
})
export class BodyLayoutBaseComponent {
  @Input() firstText: string;
  @Input() secondText: string;
  @Input() imgUrl: string;
}

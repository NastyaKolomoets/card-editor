import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILayout } from 'src/app/models/layouts/layout';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})

export class LayoutsComponent {
  currentValue: number;
  @Output() currentChange = new EventEmitter();
  @Input()
  get current() {
    return this.currentValue;
  }
  set current(val) {
    this.currentValue = val;
    this.currentChange.emit(this.currentValue);
  }

  @Input()
  available: ILayout[];

  changeLayout(id: number) {
    this.current = id;
  }
}

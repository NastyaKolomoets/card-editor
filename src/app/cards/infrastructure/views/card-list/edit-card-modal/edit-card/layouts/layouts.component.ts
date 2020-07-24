import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Layout } from 'src/app/cards/infrastructure/models/layouts/layout';
import { FieldsPlacement } from 'src/app/cards/infrastructure/models/layouts/fields-placement';

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
  available: Layout[];

  changeLayout(fieldsPlacement: FieldsPlacement) {
    this.current = fieldsPlacement;
  }
}

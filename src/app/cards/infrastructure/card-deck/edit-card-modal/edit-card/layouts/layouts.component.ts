import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Layout } from 'src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/layouts/layout-model/layout';
import { LayoutType } from 'src/app/cards/infrastructure/card/card-model/layout-type';

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

  changeLayout(fieldsPlacement: LayoutType) {
    this.current = fieldsPlacement;
  }
}

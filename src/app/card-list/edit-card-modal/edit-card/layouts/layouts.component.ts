import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILayout, Layouts } from 'src/app/models/layouts/layout';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})

export class LayoutsComponent implements OnInit {
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

  available: ILayout[];

  ngOnInit() {
    const current = Layouts.layouts[this.currentValue - 1];
    this.available = Layouts.layouts.filter(x => x.type === current.type);
  }

  changeLayout(id: number) {
    this.current = id;
  }
}

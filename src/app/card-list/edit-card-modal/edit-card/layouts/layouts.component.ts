import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILayout, Layouts, LayoutType } from 'src/app/models/layouts/layout';

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

  @Input()
  type: LayoutType;

  available: ILayout[];

  ngOnInit() {
    this.available = Layouts.layouts.filter(x => x.type === this.type);
  }

  changeLayout(id: number) {
    this.current = id;
  }
}

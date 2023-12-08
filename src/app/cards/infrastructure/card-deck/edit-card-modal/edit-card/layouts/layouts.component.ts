import { Component, EventEmitter, Input, Output } from "@angular/core";

import {
  Layout,
} from "src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/layouts/layout-model/layout";
import {
  LayoutType,
} from "src/app/cards/infrastructure/card/card-model/layout-type";

@Component({
  selector: "app-layouts",
  templateUrl: "./layouts.component.html",
  styleUrls: ["./layouts.component.scss"]
})

export class LayoutsComponent {
  @Output() currentChange = new EventEmitter();
  @Input()
  available: Layout[];

  currentValue: number;

  @Input()
  get current() {
    return this.currentValue;
  }
  set current(val) {
    this.currentValue = val;
    this.currentChange.emit(this.currentValue);
  }


  changeLayout(fieldsPlacement: LayoutType) {
    this.current = fieldsPlacement;
  }
}

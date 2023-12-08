import { Component, Input } from "@angular/core";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";
import { SingleUseItemCard } from "../model/single-use-item-card";

@Component({
  selector: "app-single-use-item-edit",
  templateUrl: "./single-use-item-edit.component.html"
})

export class SingleUseItemEditComponent implements EditCardTemplate {
  @Input()
  card: SingleUseItemCard;
}

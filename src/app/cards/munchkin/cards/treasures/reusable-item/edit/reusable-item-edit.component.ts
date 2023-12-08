import { Component, Input } from "@angular/core";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";
import { ReusableItemCard } from "../model/reusable-item-card";

@Component({
  selector: "app-reusable-item-edit",
  templateUrl: "./reusable-item-edit.component.html"
})

export class ReusableItemEditComponent implements EditCardTemplate {
  @Input()
  card: ReusableItemCard;
}

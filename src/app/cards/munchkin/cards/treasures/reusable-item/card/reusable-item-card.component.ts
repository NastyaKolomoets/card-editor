import { Component, Input } from "@angular/core";
import { CardTemplate } from "src/app/cards/infrastructure/cards";
import { ReusableItemCard } from "../model/reusable-item-card";

@Component({
  selector: "app-reusable-item-card",
  templateUrl: "./reusable-item-card.component.html"
})
export class ReusableItemCardComponent implements CardTemplate {
  @Input() card: ReusableItemCard;

  get bonus() {
    return this.card.bonus ? `Бонус +${this.card.bonus}` : "";
  }

  get huge() {
    return this.card.isHuge ? "Велика" : "";
  }

  get leftText() {
    return this.card.isHuge
      ? `${this.card.kind} ${this.huge}`
      : this.card.kind;
  }
}

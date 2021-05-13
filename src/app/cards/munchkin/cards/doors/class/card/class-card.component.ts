import { Component, Input } from "@angular/core";
import { CardTemplate } from "src/app/cards/infrastructure/cards";
import { ClassCard } from "../model/class-card";
import { prependRichText } from "src/app/cards/munchkin/helpers/html-helper";

@Component({
  selector: "app-class-card",
  templateUrl: "./class-card.component.html"
})
export class ClassCardComponent implements CardTemplate {
  @Input() card: ClassCard;

  readonly classText: string = "Клас";

  get firstAbility() {
    return prependRichText(this.card.firstAbilityDescription, `<strong>${this.card.firstAbilityName}:</strong>`, "p");
  }

  get secondAbility() {
    return prependRichText(this.card.secondAbilityDescription, `<strong>${this.card.secondAbilityName}:</strong>`, "p");
  }
}

import { Component, Input } from "@angular/core";
import { CardTemplate } from "src/app/cards/infrastructure/cards";
import { MonsterEnhancerCard } from "../model/monster-enhancer-card";
import { appendRichText } from "src/app/cards/munchkin/helpers/html-helper";

@Component({
  selector: "app-monster-enhancer-card",
  templateUrl: "./monster-enhancer-card.component.html"
})
export class MonsterEnhancerCardComponent implements CardTemplate {
  @Input() card: MonsterEnhancerCard;

  get enhancer(): string {
    const prefix = this.card.enhancerValue > 0 ? "+" : "";
    return `${prefix}${this.card.enhancerValue} до сили потвори`;
  }

  get description() {
    let treasuresText = "";
    switch (this.card.enhancerValue) {
      case 5:
        treasuresText = "візьми додатково 1 Скарб.";
        break;
      case 10:
        treasuresText = "візьми додатково 2 Скарби.";
        break;
      case -5:
        treasuresText = "візьми на 1 Скарб менше.";
        break;
      case -10:
        treasuresText = "візьми на 2 Скарби менше.";
        break;
      default:
        break;
    }

    const requiredDescription = treasuresText ? `Використай в бою. Якщо переміг потвору ${treasuresText}` : "";
    return this.card.description ? appendRichText(this.card.description, requiredDescription, "p") : `<p>${requiredDescription}</p>`;
  }
}

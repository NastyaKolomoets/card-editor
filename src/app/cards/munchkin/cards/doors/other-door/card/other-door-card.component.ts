import { Component, Input } from "@angular/core";
import { CardTemplate } from "src/app/cards/infrastructure/cards";
import { OtherDoorCard } from "../model/other-door-card";

@Component({
  selector: "app-other-door-card",
  templateUrl: "./other-door-card.component.html"
})
export class OtherDoorCardComponent implements CardTemplate {
  @Input() card: OtherDoorCard;
}

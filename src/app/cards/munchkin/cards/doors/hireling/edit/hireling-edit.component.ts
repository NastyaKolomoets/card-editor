import { Component, Input } from "@angular/core";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";
import { HirelingCard } from "../model/hireling-card";

@Component({
  selector: "app-hireling-edit",
  templateUrl: "./hireling-edit.component.html"
})

export class HirelingEditComponent implements EditCardTemplate {
  @Input()
  card: HirelingCard;
}

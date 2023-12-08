import { Component, Input } from "@angular/core";
import { RaceCard } from "../race";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";

@Component({
  selector: "app-race-edit",
  templateUrl: "./race-edit.component.html"
})

export class RaceEditComponent implements EditCardTemplate {
  @Input()
  card: RaceCard;
}

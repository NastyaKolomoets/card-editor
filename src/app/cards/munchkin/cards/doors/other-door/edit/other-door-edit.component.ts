import { Component, Input } from "@angular/core";
import { OtherDoorCard } from "../other-door";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";

@Component({
  selector: "app-other-door-edit",
  templateUrl: "./other-door-edit.component.html"
})

export class OtherDoorEditComponent implements EditCardTemplate {
  @Input()
  card: OtherDoorCard;
}

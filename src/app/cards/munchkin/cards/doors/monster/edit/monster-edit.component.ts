import { Component, Input } from "@angular/core";
import { MonsterCard } from "src/app/cards/munchkin/cards/doors/monster/model/monster-card";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";

@Component({
  selector: "app-monster-edit",
  templateUrl: "./monster-edit.component.html"
})

export class MonsterEditComponent implements EditCardTemplate {
  @Input()
  card: MonsterCard;
}

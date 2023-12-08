import { Component, Input } from "@angular/core";
import { MonsterEnhancerCard } from "../monster-enhancer";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";

@Component({
  selector: "app-monster-enhancer-edit",
  templateUrl: "./monster-enhancer-edit.component.html"
})

export class MonsterEnhancerEditComponent implements EditCardTemplate {
  @Input()
  card: MonsterEnhancerCard;
}

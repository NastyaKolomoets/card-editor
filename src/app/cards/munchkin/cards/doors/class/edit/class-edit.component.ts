import { Component, Input } from "@angular/core";
import { ClassCard } from "../class";
import { EditCardTemplate } from "src/app/cards/infrastructure/cards";

@Component({
  selector: "app-class-edit",
  templateUrl: "./class-edit.component.html"
})

export class ClassEditComponent implements EditCardTemplate {
  @Input()
  card: ClassCard;
}

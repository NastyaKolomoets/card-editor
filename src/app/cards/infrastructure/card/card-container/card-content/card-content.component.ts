import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-content",
  templateUrl: "card-content.component.html",
  styleUrls: ["card-content.component.css"]
})
export class CardContentComponent {
  @Input() backgroundImg: string;
}

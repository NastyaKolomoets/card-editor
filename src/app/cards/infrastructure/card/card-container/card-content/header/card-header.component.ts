import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-header",
  templateUrl: "./card-header.component.html",
  styleUrls: ["./card-header.component.css"]
})

export class CardHeaderComponent {
  @Input() extraTop: string;
  @Input() cardName: string;
  @Input() extraBottom: string;
}

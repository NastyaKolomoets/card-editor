import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-footer",
  templateUrl: "./card-footer.component.html",
  styleUrls: ["./card-footer.component.scss"]
})

export class CardFooterComponent {
  @Input() leftText: string;
  @Input() centerText: string;
  @Input() rightText: string;
  @Input() deckIcon: string;
}

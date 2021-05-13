import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Card, CardType } from "../card";
import { CardTemplate } from "./card-template";
import { TemplateDirective, TemplateComponentFactory } from "../../template/template";
import { CardTemplateService } from "./card-template.service";

@Component({
  selector: "app-card-container",
  templateUrl: "./card-container.component.html",
  styleUrls: ["./card-container.component.css"]
})
export class CardContainerComponent implements OnInit {
  @Input() card: Card;
  @ViewChild(TemplateDirective, { static: true }) cardTemplate: TemplateDirective;

  constructor(
    private templateService: CardTemplateService,
    private templateFactory: TemplateComponentFactory<CardType, CardTemplate>
  ) { }

  ngOnInit() {
    const component = this.templateFactory.createComponent(this.templateService, this.cardTemplate, this.card.type);
    component.card = this.card;
  }
}

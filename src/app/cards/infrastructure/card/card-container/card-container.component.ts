import { Component, Input, OnInit, ViewChild } from "@angular/core";

import {
  TemplateComponentFactory, TemplateDirective,
} from "../../template/template";
import { Card, CardType } from "../card";
import { CardTemplate } from "./card-template";
import { CardTemplateService } from "./card-template.service";

@Component({
  selector: "app-card-container",
  templateUrl: "./card-container.component.html",
  styleUrls: ["./card-container.component.scss"]
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

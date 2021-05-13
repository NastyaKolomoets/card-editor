import { Component, Input, ViewChild, OnChanges, SimpleChanges } from "@angular/core";
import { TemplateDirective, TemplateComponentFactory } from "src/app/cards/infrastructure/template/template";
import { BodyLayoutBaseComponent } from "./body-layout-base.component";
import { LayoutType } from "../../../card-model/layout-type";
import { BodyLayoutService } from "./body-layout.service";

@Component({
  selector: "app-card-body",
  templateUrl: "./card-body.component.html"
})

export class CardBodyComponent extends BodyLayoutBaseComponent implements OnChanges {
  @Input() fieldsPlacement: LayoutType;

  @ViewChild(TemplateDirective, { static: true }) layoutTemplate: TemplateDirective;

  constructor(
    private templateService: BodyLayoutService,
    private templateFactory: TemplateComponentFactory<LayoutType, BodyLayoutBaseComponent>) {
    super();
  }

  ngOnChanges(_: SimpleChanges): void {
    this.loadLayoutComponent();
  }

  private loadLayoutComponent() {
    const component = this.templateFactory.createComponent(this.templateService, this.layoutTemplate, this.fieldsPlacement);
    component.imgUrl = this.imgUrl;
    component.firstText = this.firstText;
    component.secondText = this.secondText;
  }
}

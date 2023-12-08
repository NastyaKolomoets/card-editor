import { Component, Input, OnInit, ViewChild } from "@angular/core";

import { EditTemplateService } from "src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/edit-template.service";
import { ImagesService } from "src/app/cards/infrastructure/card-deck/services/images.service";
import { CardType } from "src/app/cards/infrastructure/card/card";
import { Card } from "src/app/cards/infrastructure/card/card-model/card";
import { TemplateComponentFactory } from "src/app/cards/infrastructure/template/template-component-factory";
import { TemplateDirective } from "src/app/cards/infrastructure/template/template.directive";

import { EditCardTemplate } from "./edit-card-template";

@Component({
  selector: "app-edit-card",
  templateUrl: "./edit-card.component.html",
  styleUrls: ["./edit-card.component.css"]
})

export class EditCardComponent implements OnInit {
  @Input() card: Card;
  @ViewChild(TemplateDirective, { static: true }) editTemplate: TemplateDirective;

  constructor(
    private imagesService: ImagesService,
    private templateService: EditTemplateService,
    private templateFactory: TemplateComponentFactory<CardType, EditCardTemplate>
  ) { }

  ngOnInit() {
    const component = this.templateFactory.createComponent(this.templateService, this.editTemplate, this.card.type);
    component.card = this.card;
  }

  getImageName() {
    return this.card.img.substring(this.card.img.lastIndexOf("/") + 1, this.card.img.indexOf("?"));
  }

  async handleFileInput(file: any) {
    await this.imagesService.upload(file[0]);
    this.card.img = file.name;
    // uploadTask
    //   .then(img =>
    //     img.ref.getDownloadURL()
    //       .then(url => this.card.img = url)
    //       .catch(error => alert(`Failed to upload. ${error}`)));
  }
}

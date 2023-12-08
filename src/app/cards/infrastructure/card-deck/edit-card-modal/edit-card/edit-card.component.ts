import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Card } from "src/app/cards/infrastructure/card/card-model/card";
import { ImagesService } from "src/app/cards/infrastructure/card-deck/services/images.service";
import { EditTemplateService } from "src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/edit-template.service";
import { TemplateComponentFactory } from "src/app/cards/infrastructure/template/template-component-factory";
import { TemplateDirective } from "src/app/cards/infrastructure/template/template.directive";
import { CardType } from "src/app/cards/infrastructure/card/card";
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

  handleFileInput(file: any) {
    const uploadTask = this.imagesService.upload(file[0]);
    uploadTask
      .then(img =>
        img.ref.getDownloadURL()
          .then(url => this.card.img = url)
          .catch(error => alert(`Failed to upload. ${error}`))
          .catch(error => alert(`Failed to upload. ${error}`)));
  }
}

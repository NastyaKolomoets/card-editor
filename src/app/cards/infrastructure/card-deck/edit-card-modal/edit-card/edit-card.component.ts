import {
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';

import {
  EditTemplateService,
} from 'src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/edit-template.service';
import { CardType } from 'src/app/cards/infrastructure/card/card';
import { Card } from 'src/app/cards/infrastructure/card/card-model/card';
import {
  TemplateComponentFactory,
} from 'src/app/cards/infrastructure/template/template-component-factory';
import {
  TemplateDirective,
} from 'src/app/cards/infrastructure/template/template.directive';

import { EditCardTemplate } from './edit-card-template';

@Component({
  selector: "app-edit-card",
  templateUrl: "./edit-card.component.html",
  styleUrls: ["./edit-card.component.scss"]
})

export class EditCardComponent implements OnInit {
  @Input() card: Card;
  @ViewChild(TemplateDirective, { static: true }) editTemplate: TemplateDirective;

  private storage = inject(Storage)

  constructor(
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

  async handleFileInput(event: any) {
    const image = event.target.files[0];
    const imgRef = ref(this.storage, image.name);
    uploadBytesResumable(imgRef, image)
      .then(_ => getDownloadURL(imgRef).then(url => this.card.img = url))
      .catch(error => alert(`Failed to upload. ${error}`));


  }
}

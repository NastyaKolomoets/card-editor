import { Injectable } from "@angular/core";
import { TemplateService } from "../../../template/template.service";
import { CardType } from "../../../card/card";
import { EditTemplateResolver } from "./edit-template-resolver";

@Injectable()
export class EditTemplateService extends TemplateService<CardType> {

  constructor(templateResolver: EditTemplateResolver) {
    super(templateResolver);
  }
}

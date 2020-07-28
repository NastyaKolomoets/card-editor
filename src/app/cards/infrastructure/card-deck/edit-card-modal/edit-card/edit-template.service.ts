import { Injectable } from '@angular/core';
import { TemplateService } from '../../../template/template.service';
import { CardType } from '../../../card/card';

@Injectable()
export class EditTemplateService extends TemplateService<CardType> { }

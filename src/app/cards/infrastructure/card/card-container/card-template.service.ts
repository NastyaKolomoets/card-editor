import { Injectable } from '@angular/core';
import { CardType } from '../card';
import { TemplateService } from '../../template/template';

@Injectable()
export class CardTemplateService extends TemplateService<CardType> { }

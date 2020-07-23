import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Card } from '../../../models/card';
import { TemplateDirective } from '../../../template/template.directive';
import { CardTemplateService } from '../../../services/card-template.service';
import { TemplateComponentFactory } from '../../../services/template-component-factory';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() card: Card;
  @ViewChild(TemplateDirective, { static: true }) cardTemplate: TemplateDirective;

  constructor(
    private templateService: CardTemplateService,
    private templateFactory: TemplateComponentFactory
  ) { }

  ngOnInit() {
    this.templateFactory.createComponent(this.templateService, this.cardTemplate.viewContainerRef, this.card);
  }
}

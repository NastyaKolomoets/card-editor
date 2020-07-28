import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { TemplateDirective, TemplateComponentFactory } from 'src/app/cards/infrastructure/template/template';
import { ContentLayoutBaseComponent } from './content-layout-base.component';
import { LayoutType } from '../../../card-model/layout-type';
import { ContentLayoutService } from './content-layout.service';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html'
})

export class CardContentComponent extends ContentLayoutBaseComponent implements OnChanges {
  @Input() fieldsPlacement: LayoutType;

  @ViewChild(TemplateDirective, { static: true }) layoutTemplate: TemplateDirective;

  constructor(
    private templateService: ContentLayoutService,
    private templateFactory: TemplateComponentFactory<LayoutType, ContentLayoutBaseComponent>) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadLayoutComponent();
  }

  private loadLayoutComponent() {
    const component = this.templateFactory.createComponent(this.templateService, this.layoutTemplate, this.fieldsPlacement);
    component.imgUrl = this.imgUrl;
    component.firstText = this.firstText;
    component.secondText = this.secondText;
  }
}

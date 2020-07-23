import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TemplateService } from './template.service';
import { Card } from '../models/card';
import { Template } from '../template/template';

@Injectable()
export class TemplateComponentFactory {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createComponent(templateService: TemplateService, viewContainerRef: ViewContainerRef, card: Card): Template {
    const template = templateService.getTemplate(card);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(template.component);

    // viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const component = componentRef.instance as Template;
    component.card = template.card;

    return component;
  }
}

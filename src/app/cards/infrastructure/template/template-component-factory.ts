import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { TemplateService } from './template.service';
import { TemplateDirective } from './template.directive';

@Injectable()
export class TemplateComponentFactory<TemplateType, TemplateComponentBase> {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createComponent(
    templateService: TemplateService<TemplateType>,
    templateDirective: TemplateDirective,
    type: TemplateType): TemplateComponentBase {

    const viewContainerRef = templateDirective.viewContainerRef;
    const template = templateService.getTemplate(type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<TemplateComponentBase>(template);

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    return componentRef.instance;
  }
}

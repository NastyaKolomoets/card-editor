import { Type } from '@angular/core';
import { TemplateResolver } from './template-resolver';

export class TemplateService<T> {
  constructor(private templateResolver: TemplateResolver<T>) { }

  getTemplate(type: T): Type<any> {
    return this.templateResolver.getTemplateType(type);
  }
}

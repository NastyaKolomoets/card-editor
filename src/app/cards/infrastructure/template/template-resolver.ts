import { Type } from '@angular/core';

export interface TemplateResolver<T> {
  getTemplateType(type: T): Type<any>;
}

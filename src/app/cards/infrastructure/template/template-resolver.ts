import { Type } from '@angular/core';

export interface TemplateResolver<T, R> {
  getTemplateType(type: T): Type<R>;
}

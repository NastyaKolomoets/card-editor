import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

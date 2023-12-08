import { NgModule, ModuleWithProviders } from "@angular/core";
import { TemplateDirective } from "./template.directive";
import { TemplateComponentFactory } from "./template-component-factory";

@NgModule({
  declarations: [
    TemplateDirective,
  ],
  exports: [
    TemplateDirective,
  ],
  providers: [
    TemplateComponentFactory,
  ]
})
export class TemplateModule {
}

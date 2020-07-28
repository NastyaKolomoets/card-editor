import { NgModule, ModuleWithProviders } from '@angular/core';
import { TemplateDirective } from './template.directive';
import { TemplateResolver } from './template-resolver';
import { TemplateService } from './template.service';
import { TemplateComponentFactory } from './template-component-factory';

@NgModule({
  declarations: [
    TemplateDirective
  ],
  exports: [
    TemplateDirective
  ],
  providers: [
    TemplateComponentFactory
  ]
})
export class TemplateModule {
  // static forRoot<T>(resolver: TemplateResolver<T>): ModuleWithProviders {
  //   return {
  //     ngModule: TemplateModule,
  //     providers: [
  //       { provide: TemplateService, useFactory: () => new TemplateService(resolver) }
  //     ]
  //   };
  // }
}

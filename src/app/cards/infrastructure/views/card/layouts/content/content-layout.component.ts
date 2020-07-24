import { Component, Input, ComponentFactoryResolver, Type, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FieldsPlacement } from 'src/app/cards/infrastructure/models/layouts/fields-placement';
import { ImageTopComponent } from './image-top/image-top.component';
import { ImageCenterComponent } from './image-center/image-center.component';
import { ImageBottomComponent } from './image-bottom/image-bottom.component';
import { ImageOverlapComponent } from './image-overlap/image-overlap.component';
import { LargeTextComponent } from './large-text/large-text.component';
import { TemplateDirective } from 'src/app/cards/infrastructure/template/template.directive';
import { ContentLayoutBaseComponent } from './content-layout-base.component';
import { ImageTopLayout } from 'src/app/cards/infrastructure/models/layouts/layouts';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html'
})

export class ContentLayoutComponent extends ContentLayoutBaseComponent implements OnInit, OnChanges {
  @Input() fieldsPlacement: FieldsPlacement;

  @ViewChild(TemplateDirective, { static: true }) layout: TemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
    this.loadLayoutComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadLayoutComponent();
  }

  private loadLayoutComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getLayout());
    const viewContainerRef = this.layout.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const component = componentRef.instance;
    component.imgUrl = this.imgUrl;
    component.firstText = this.firstText;
    component.secondText = this.secondText;
  }

  private getLayout(): Type<ContentLayoutBaseComponent> {
    switch (this.fieldsPlacement) {
      case FieldsPlacement.IMAGE_TOP:
        return ImageTopComponent;
      case FieldsPlacement.IMAGE_CENTER:
        return ImageCenterComponent;
      case FieldsPlacement.IMAGE_BOTTOM:
        return ImageBottomComponent;
      case FieldsPlacement.IMAGE_OVERLAP:
        return ImageOverlapComponent;
      case FieldsPlacement.LARGE_TEXT:
        return LargeTextComponent;
      default:
        return ImageTopComponent;
    }
  }
}

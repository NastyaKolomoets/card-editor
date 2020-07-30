import { TemplateResolver } from 'src/app/cards/infrastructure/template/template';
import { Type } from '@angular/core';
import { BodyLayoutBaseComponent } from './body-layout-base.component';
import { LayoutType } from '../../../card-model/layout-type';
import { ImageTopComponent } from './image-top/image-top.component';
import { ImageCenterComponent } from './image-center/image-center.component';
import { ImageBottomComponent } from './image-bottom/image-bottom.component';
import { ImageOverlapComponent } from './image-overlap/image-overlap.component';
import { LargeTextComponent } from './large-text/large-text.component';

export class BodyLayoutResolver implements TemplateResolver<LayoutType> {
  getTemplateType(type: LayoutType): Type<BodyLayoutBaseComponent> {
    switch (type) {
      case LayoutType.IMAGE_TOP:
        return ImageTopComponent;
      case LayoutType.IMAGE_CENTER:
        return ImageCenterComponent;
      case LayoutType.IMAGE_BOTTOM:
        return ImageBottomComponent;
      case LayoutType.IMAGE_OVERLAP:
        return ImageOverlapComponent;
      case LayoutType.LARGE_TEXT:
        return LargeTextComponent;
      default:
        return ImageTopComponent;
    }
  }
}

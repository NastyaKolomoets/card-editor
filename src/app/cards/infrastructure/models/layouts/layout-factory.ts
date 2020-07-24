import { FieldsPlacement } from './fields-placement';
import { ImageTopLayout, ImageCenterLayout, ImageBottomLayout, ImageOverlapLayout, LargeTextLayout } from './layouts';

export class LayoutFactory {
  static getLayout(fieldsPlacement: FieldsPlacement) {
    switch (fieldsPlacement) {
      case FieldsPlacement.IMAGE_TOP: return ImageTopLayout;
      case FieldsPlacement.IMAGE_CENTER: return ImageCenterLayout;
      case FieldsPlacement.IMAGE_BOTTOM: return ImageBottomLayout;
      case FieldsPlacement.IMAGE_OVERLAP: return ImageOverlapLayout;
      case FieldsPlacement.LARGE_TEXT: return LargeTextLayout;
    }
  }
}

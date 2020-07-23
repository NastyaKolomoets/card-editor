import { FieldsPosition } from './fields-position';
import { ImageTopLayout, ImageCenterLayout, ImageBottomLayout, ImageOverlapLayout, LargeTextLayout } from './layouts';

export class LayoutFactory {
  static getLayout(fieldsPosition: FieldsPosition) {
    switch (fieldsPosition) {
      case FieldsPosition.IMAGE_TOP: return ImageTopLayout;
      case FieldsPosition.IMAGE_CENTER: return ImageCenterLayout;
      case FieldsPosition.IMAGE_BOTTOM: return ImageBottomLayout;
      case FieldsPosition.IMAGE_OVERLAP: return ImageOverlapLayout;
      case FieldsPosition.LARGE_TEXT: return LargeTextLayout;
    }
  }
}

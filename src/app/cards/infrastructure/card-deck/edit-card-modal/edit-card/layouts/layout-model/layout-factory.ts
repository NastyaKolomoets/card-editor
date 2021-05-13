
import { ImageTopLayout, ImageCenterLayout, ImageBottomLayout, ImageOverlapLayout, LargeTextLayout } from "./layouts";
import { LayoutType } from "../../../../../card/card";

export class LayoutFactory {
  static getLayout(fieldsPlacement: LayoutType) {
    switch (fieldsPlacement) {
      case LayoutType.IMAGE_TOP: return ImageTopLayout;
      case LayoutType.IMAGE_CENTER: return ImageCenterLayout;
      case LayoutType.IMAGE_BOTTOM: return ImageBottomLayout;
      case LayoutType.IMAGE_OVERLAP: return ImageOverlapLayout;
      case LayoutType.LARGE_TEXT: return LargeTextLayout;
    }
  }
}

import { OneTextFieldLayout } from './one-text-field-layout';
import { TwoTextFieldsLayout } from './two-text-fields-layout';
import { Layouts } from './layout';

export class AvailableLayouts {
  static OneTextFieldLayouts = [
    Layouts.layouts[OneTextFieldLayout.IMAGE_TOP],
    Layouts.layouts[OneTextFieldLayout.IMAGE_BOTTOM],
    Layouts.layouts[OneTextFieldLayout.IMAGE_OVERLAP],
    Layouts.layouts[OneTextFieldLayout.LARGE_TEXT]
  ];

  static TwoTextFieldsLayouts = [
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_TOP],
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_CENTER],
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_BOTTOM],
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_OVERLAP]
  ];

  static MixedLayouts = [
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_TOP],
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_CENTER],
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_BOTTOM],
    Layouts.layouts[TwoTextFieldsLayout.IMAGE_OVERLAP],
    Layouts.layouts[OneTextFieldLayout.LARGE_TEXT]
  ];
}

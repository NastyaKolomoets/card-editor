import { OneTextFieldLayout } from './one-text-field-layout';
import { TwoTextFieldsLayout } from './two-text-fields-layout';

export enum LayoutType {
  ONE_TEXT_FIELD,
  TWO_TEXT_FIELDS
}

export interface ILayout {
  id: number;
  imagePosition: string;
  icon: string;
  type: LayoutType;
}

export class Layouts {
  static layouts: ILayout[] = [
    {
      id: OneTextFieldLayout.IMAGE_TOP,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'top',
      icon: ''
    },
    {
      id: OneTextFieldLayout.IMAGE_BOTTOM,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'bottom',
      icon: ''
    },
    {
      id: OneTextFieldLayout.IMAGE_OVERLAP,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'overlap',
      icon: ''
    },
    {
      id: OneTextFieldLayout.LARGE_TEXT,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'largeText',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_TOP,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'top',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_CENTER,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'center',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_BOTTOM,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'bottom',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_OVERLAP,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'overlap',
      icon: ''
    }
  ];
}

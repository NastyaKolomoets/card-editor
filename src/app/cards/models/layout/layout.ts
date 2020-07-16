import { OneTextFieldLayout } from './one-text-field-layout';
import { TwoTextFieldsLayout } from './two-text-fields-layout';

export interface ILayout {
  id: number;
  imagePosition: string;
  icon: string;
}

export class Layouts {
  static layouts: ILayout[] = [
    {
      id: OneTextFieldLayout.IMAGE_TOP,
      imagePosition: 'top',
      icon: ''
    },
    {
      id: OneTextFieldLayout.IMAGE_BOTTOM,
      imagePosition: 'bottom',
      icon: ''
    },
    {
      id: OneTextFieldLayout.IMAGE_OVERLAP,
      imagePosition: 'overlap',
      icon: ''
    },
    {
      id: OneTextFieldLayout.LARGE_TEXT,
      imagePosition: 'largeText',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_TOP,
      imagePosition: 'top',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_CENTER,
      imagePosition: 'center',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_BOTTOM,
      imagePosition: 'bottom',
      icon: ''
    },
    {
      id: TwoTextFieldsLayout.IMAGE_OVERLAP,
      imagePosition: 'overlap',
      icon: ''
    }
  ];
}

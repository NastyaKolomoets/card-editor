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
      id: 1,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'top',
      icon: ''
    },
    {
      id: 2,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'bottom',
      icon: ''
    },
    {
      id: 3,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'overlap',
      icon: ''
    },
    {
      id: 4,
      type: LayoutType.ONE_TEXT_FIELD,
      imagePosition: 'largeText',
      icon: ''
    },
    {
      id: 5,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'top',
      icon: ''
    },
    {
      id: 6,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'center',
      icon: ''
    },
    {
      id: 7,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'bottom',
      icon: ''
    },
    {
      id: 8,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'overlap',
      icon: ''
    },
    {
      id: 9,
      type: LayoutType.TWO_TEXT_FIELDS,
      imagePosition: 'largeText',
      icon: ''
    }
  ];
}

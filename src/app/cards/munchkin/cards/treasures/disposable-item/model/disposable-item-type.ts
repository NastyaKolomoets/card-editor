import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const DisposableItemType: CardType = {
  name: 'disposableItem',
  namePlural: 'disposableItems',
  displayName: 'Одноразова манатка',
  displayNamePlural: 'Одноразові манатки',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

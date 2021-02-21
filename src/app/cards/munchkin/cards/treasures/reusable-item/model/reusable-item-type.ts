import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const ReusableItemType: CardType = {
  name: 'reusableItem',
  namePlural: 'reusableItems',
  displayName: 'Багаторазова манатка',
  displayNamePlural: 'Багаторазові манатки',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

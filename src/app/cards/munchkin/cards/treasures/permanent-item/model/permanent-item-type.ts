import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const PermanentItemType: CardType = {
  name: 'permanentItem',
  namePlural: 'permanentItems',
  displayName: 'Багаторазова манатка',
  displayNamePlural: 'Багаторазові манатки',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

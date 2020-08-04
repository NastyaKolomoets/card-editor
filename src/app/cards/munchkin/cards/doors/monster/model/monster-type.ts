import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const MonsterType: CardType = {
  name: 'monster',
  namePlural: 'monsters',
  displayName: 'Потвора',
  displayNamePlural: 'Потвори',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

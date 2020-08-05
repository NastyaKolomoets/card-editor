import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const MonsterEnhancerType: CardType = {
  name: 'monsterEnhancer',
  namePlural: 'monsterEnhancers',
  displayName: 'Підсилювач потвори',
  displayNamePlural: 'Підсилювачі потвори',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

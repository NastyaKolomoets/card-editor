import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const LevelUpType: CardType = {
  name: 'levelUp',
  namePlural: 'levelUps',
  displayName: 'Отримай рівень',
  displayNamePlural: 'Отримай рівень',
  availableLayouts: [
    LayoutType.LARGE_TEXT
  ]
};

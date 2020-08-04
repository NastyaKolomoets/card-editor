import { CardType } from '../../../infrastructure/card/card-model/card-type';
import { LayoutType } from '../../../infrastructure/card/card-model/layout-type';

export const ClassType: CardType = {
  name: 'class',
  namePlural: 'classes',
  displayName: 'Клас',
  displayNamePlural: 'Класи',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ],
};

export const RaceType: CardType = {
  name: 'race',
  namePlural: 'races',
  displayName: 'Раса',
  displayNamePlural: 'Раси',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

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

export const CurseType: CardType = {
  name: 'curse',
  namePlural: 'curses',
  displayName: 'Прокляття',
  displayNamePlural: 'Прокляття',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP,
    LayoutType.LARGE_TEXT
  ]
};

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

export const OtherDoorType: CardType = {
  name: 'otherDoor',
  namePlural: 'otherDoors',
  displayName: 'Інше',
  displayNamePlural: 'Інше',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

import { CardType } from '../../../infrastructure/models/card-type';
import { FieldsPosition } from '../../../infrastructure/models/layouts/fields-position';

export const ClassType: CardType = {
  name: 'class',
  namePlural: 'classes',
  displayName: 'Клас',
  displayNamePlural: 'Класи',
  availableLayouts: [
    FieldsPosition.IMAGE_TOP,
    FieldsPosition.IMAGE_CENTER,
    FieldsPosition.IMAGE_BOTTOM,
    FieldsPosition.IMAGE_OVERLAP
  ],
};

export const RaceType: CardType = {
  name: 'race',
  namePlural: 'races',
  displayName: 'Раса',
  displayNamePlural: 'Раси',
  availableLayouts: [
    FieldsPosition.IMAGE_TOP,
    FieldsPosition.IMAGE_CENTER,
    FieldsPosition.IMAGE_BOTTOM,
    FieldsPosition.IMAGE_OVERLAP
  ]
};

export const MonsterType: CardType = {
  name: 'monster',
  namePlural: 'monsters',
  displayName: 'Потвора',
  displayNamePlural: 'Потвори',
  availableLayouts: [
    FieldsPosition.IMAGE_TOP,
    FieldsPosition.IMAGE_CENTER,
    FieldsPosition.IMAGE_BOTTOM,
    FieldsPosition.IMAGE_OVERLAP
  ]
};

export const CurseType: CardType = {
  name: 'curse',
  namePlural: 'curses',
  displayName: 'Прокляття',
  displayNamePlural: 'Прокляття',
  availableLayouts: [
    FieldsPosition.IMAGE_TOP,
    FieldsPosition.IMAGE_CENTER,
    FieldsPosition.IMAGE_BOTTOM,
    FieldsPosition.IMAGE_OVERLAP,
    FieldsPosition.LARGE_TEXT
  ]
};

export const MonsterEnhancerType: CardType = {
  name: 'monsterEnhancer',
  namePlural: 'monsterEnhancers',
  displayName: 'Підсилювач потвори',
  displayNamePlural: 'Підсилювачі потвори',
  availableLayouts: [
    FieldsPosition.IMAGE_TOP,
    FieldsPosition.IMAGE_CENTER,
    FieldsPosition.IMAGE_BOTTOM,
    FieldsPosition.IMAGE_OVERLAP
  ]
};

export const OtherDoorType: CardType = {
  name: 'otherDoor',
  namePlural: 'otherDoors',
  displayName: 'Інше',
  displayNamePlural: 'Інше',
  availableLayouts: [
    FieldsPosition.IMAGE_TOP,
    FieldsPosition.IMAGE_CENTER,
    FieldsPosition.IMAGE_BOTTOM,
    FieldsPosition.IMAGE_OVERLAP
  ]
};

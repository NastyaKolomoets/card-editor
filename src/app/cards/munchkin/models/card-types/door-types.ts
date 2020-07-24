import { CardType } from '../../../infrastructure/models/card-type';
import { FieldsPlacement } from '../../../infrastructure/models/layouts/fields-placement';

export const ClassType: CardType = {
  name: 'class',
  namePlural: 'classes',
  displayName: 'Клас',
  displayNamePlural: 'Класи',
  availableLayouts: [
    FieldsPlacement.IMAGE_TOP,
    FieldsPlacement.IMAGE_CENTER,
    FieldsPlacement.IMAGE_BOTTOM,
    FieldsPlacement.IMAGE_OVERLAP
  ],
};

export const RaceType: CardType = {
  name: 'race',
  namePlural: 'races',
  displayName: 'Раса',
  displayNamePlural: 'Раси',
  availableLayouts: [
    FieldsPlacement.IMAGE_TOP,
    FieldsPlacement.IMAGE_CENTER,
    FieldsPlacement.IMAGE_BOTTOM,
    FieldsPlacement.IMAGE_OVERLAP
  ]
};

export const MonsterType: CardType = {
  name: 'monster',
  namePlural: 'monsters',
  displayName: 'Потвора',
  displayNamePlural: 'Потвори',
  availableLayouts: [
    FieldsPlacement.IMAGE_TOP,
    FieldsPlacement.IMAGE_CENTER,
    FieldsPlacement.IMAGE_BOTTOM,
    FieldsPlacement.IMAGE_OVERLAP
  ]
};

export const CurseType: CardType = {
  name: 'curse',
  namePlural: 'curses',
  displayName: 'Прокляття',
  displayNamePlural: 'Прокляття',
  availableLayouts: [
    FieldsPlacement.IMAGE_TOP,
    FieldsPlacement.IMAGE_CENTER,
    FieldsPlacement.IMAGE_BOTTOM,
    FieldsPlacement.IMAGE_OVERLAP,
    FieldsPlacement.LARGE_TEXT
  ]
};

export const MonsterEnhancerType: CardType = {
  name: 'monsterEnhancer',
  namePlural: 'monsterEnhancers',
  displayName: 'Підсилювач потвори',
  displayNamePlural: 'Підсилювачі потвори',
  availableLayouts: [
    FieldsPlacement.IMAGE_TOP,
    FieldsPlacement.IMAGE_CENTER,
    FieldsPlacement.IMAGE_BOTTOM,
    FieldsPlacement.IMAGE_OVERLAP
  ]
};

export const OtherDoorType: CardType = {
  name: 'otherDoor',
  namePlural: 'otherDoors',
  displayName: 'Інше',
  displayNamePlural: 'Інше',
  availableLayouts: [
    FieldsPlacement.IMAGE_TOP,
    FieldsPlacement.IMAGE_CENTER,
    FieldsPlacement.IMAGE_BOTTOM,
    FieldsPlacement.IMAGE_OVERLAP
  ]
};

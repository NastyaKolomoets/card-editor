import { CardType, LayoutType } from 'src/app/cards/infrastructure/cards';

export const OtherDoorType: CardType = {
  name: 'otherDoor',
  namePlural: 'otherDoors',
  displayName: 'Інше',
  displayNamePlural: 'Інше',
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP
  ]
};

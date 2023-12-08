import { CardType, LayoutType } from "src/app/cards/infrastructure/cards";

export const ClassType: CardType = {
  name: "class",
  namePlural: "classes",
  displayName: "Клас",
  displayNamePlural: "Класи",
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP,
  ],
};

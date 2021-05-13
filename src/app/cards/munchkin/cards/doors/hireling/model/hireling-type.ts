import { CardType, LayoutType } from "src/app/cards/infrastructure/cards";

export const HirelingType: CardType = {
  name: "hireling",
  namePlural: "hirelings",
  displayName: "Наймит",
  displayNamePlural: "Наймити",
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP,
  ]
};

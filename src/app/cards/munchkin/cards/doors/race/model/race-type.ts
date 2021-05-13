import { CardType, LayoutType } from "src/app/cards/infrastructure/cards";

export const RaceType: CardType = {
  name: "race",
  namePlural: "races",
  displayName: "Раса",
  displayNamePlural: "Раси",
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP,
  ]
};

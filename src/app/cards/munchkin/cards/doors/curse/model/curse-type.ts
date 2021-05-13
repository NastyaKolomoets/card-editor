import { CardType, LayoutType } from "src/app/cards/infrastructure/cards";

export const CurseType: CardType = {
  name: "curse",
  namePlural: "curses",
  displayName: "Прокляття",
  displayNamePlural: "Прокляття",
  availableLayouts: [
    LayoutType.IMAGE_TOP,
    LayoutType.IMAGE_CENTER,
    LayoutType.IMAGE_BOTTOM,
    LayoutType.IMAGE_OVERLAP,
    LayoutType.LARGE_TEXT,
  ]
};

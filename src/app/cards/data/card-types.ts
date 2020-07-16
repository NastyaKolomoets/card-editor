import { CardType } from '../models/card/card-type';
import { CardTypeDetails } from '../models/card/card-type-details';
import { ICard } from '../models/card/card';
import { AvailableLayouts } from './available-layouts';


export class CardTypes {
  static door = {
    name: 'door',
    plural: 'doors',
    nameUkr: 'Двері',
    pluralUkr: 'Двері',
    parent: null
  };

  static cardTypes = new Map<CardType, CardTypeDetails>([
    [
      CardType.CLASS,
      new CardTypeDetails({
        name: 'class',
        plural: 'classes',
        nameUkr: 'Клас',
        pluralUkr: 'Класи',
        parent: CardTypes.door,
        layouts: AvailableLayouts.TwoTextFieldsLayouts
      })
    ],
    [
      CardType.CURSE,
      new CardTypeDetails({
        name: 'curse',
        plural: 'curses',
        nameUkr: 'Прокляття',
        pluralUkr: 'Прокляття',
        parent: CardTypes.door,
        layouts: AvailableLayouts.MixedLayouts
      })
    ],
    [
      CardType.MONSTER_ENHANCER,
      new CardTypeDetails({
        name: 'monsterEnhancer',
        plural: 'monsterEnhancers',
        nameUkr: 'Підсилювач потвори',
        pluralUkr: 'Підсилювачі потвори',
        parent: CardTypes.door,
        layouts: AvailableLayouts.TwoTextFieldsLayouts
      })
    ],
    [
      CardType.MONSTER,
      new CardTypeDetails({
        name: 'monster',
        plural: 'monsters',
        nameUkr: 'Потвора',
        pluralUkr: 'Потвори',
        parent: CardTypes.door,
        layouts: AvailableLayouts.TwoTextFieldsLayouts
      })
    ],
    [
      CardType.OTHER_DOOR,
      new CardTypeDetails({
        name: 'otherDoor',
        plural: 'otherDoors',
        nameUkr: 'Інше',
        pluralUkr: 'Інше',
        parent: CardTypes.door,
        layouts: AvailableLayouts.OneTextFieldLayouts
      })
    ],
    [
      CardType.RACE,
      new CardTypeDetails({
        name: 'race',
        plural: 'races',
        nameUkr: 'Раса',
        pluralUkr: 'Раси',
        parent: CardTypes.door,
        layouts: AvailableLayouts.TwoTextFieldsLayouts
      })
    ],
  ]);

  static getCardType(card: ICard): CardTypeDetails {
    return this.getCardTypeDetails(card.type);
  }

  static getCardTypeDetails(type: CardType): CardTypeDetails {
    return this.cardTypes.get(type);
  }
}

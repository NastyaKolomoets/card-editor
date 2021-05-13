import { Card } from "../../../infrastructure/card/card-model/card";
import { CardType } from "../../../infrastructure/card/card-model/card-type";

export class TreasureCard extends Card {

  static backgroundImage = "";

  constructor(type: CardType, obj: any) {
    super(type, obj);
  }
}

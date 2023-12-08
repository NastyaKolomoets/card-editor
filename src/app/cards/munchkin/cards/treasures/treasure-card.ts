import { Card } from "../../../infrastructure/card/card-model/card";
import { CardType } from "../../../infrastructure/card/card-model/card-type";

export class TreasureCard extends Card {

  price: number;

  constructor(type: CardType, obj: any) {
    super(type, obj);
    this.price = obj?.price;
    this.backgroundImg = "assets/doors_back.png"; // temp
  }

  get priceText() {
    if (!this.price && this.price !== 0) {
      return "";
    }

    return this.price > 0 ? `${this.price} золотих` : "Нічого не варта";
  }
}

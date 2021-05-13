import { CardGroup } from "./card-group";
import { CardType, CardTemplate } from "../../card/card";
import { Type } from "@angular/core";
import { EditCardTemplate } from "../edit-card-modal/edit-card/edit-card-template";
import { Card } from "../../card/card-model/card";
import { CardTypeConfig } from "./card-type-config";

export class DeckConfig {
  config: CardTypeConfig[];
  groups: CardGroup[] = [];

  constructor(config: CardTypeConfig[]) {
    this.config = config;
  }
}

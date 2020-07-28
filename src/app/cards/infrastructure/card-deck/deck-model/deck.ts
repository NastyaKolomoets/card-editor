import { CardGroup } from './card-group';

export class Deck {
  groups: CardGroup[];

  constructor(groups: CardGroup[]) {
    this.groups = groups;
  }
}

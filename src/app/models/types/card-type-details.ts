import { LayoutType } from '../layouts/layout';

export class CardTypeDetails {
  readonly parent: CardTypeDetails;
  readonly name: string;
  readonly plural: string;
  readonly nameUkr: string;
  readonly pluralUkr: string;
  readonly layoutType: LayoutType;

  constructor(obj: any) {
    this.parent = obj.parent;
    this.name = obj.name;
    this.plural = obj.plural;
    this.nameUkr = obj.nameUkr;
    this.pluralUkr = obj.pluralUkr;
    this.layoutType = obj.layoutType;
  }

  getUri(): string {
    return this.plural;
  }
}

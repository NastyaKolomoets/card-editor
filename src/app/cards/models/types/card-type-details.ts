export class CardTypeDetails {
  readonly parent: CardTypeDetails;
  readonly name: string;
  readonly plural: string;
  readonly nameUkr: string;
  readonly pluralUkr: string;

  constructor(obj: any) {
    this.parent = obj.parent;
    this.name = obj.name;
    this.plural = obj.plural;
    this.nameUkr = obj.nameUkr;
    this.pluralUkr = obj.pluralUkr;
  }

  getUri(): string {
    return this.plural;
  }
}

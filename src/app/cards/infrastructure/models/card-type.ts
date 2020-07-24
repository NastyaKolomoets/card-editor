import { FieldsPlacement } from './layouts/fields-placement';

export class CardType {
  name: string;
  namePlural: string;
  displayName: string;
  displayNamePlural: string;
  availableLayouts: FieldsPlacement[];
}

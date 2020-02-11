export interface ICard {
  key: string;
  type: string;
  name: string;
  description: string;
  img: string;

  getBackgroungImg(): string;
}

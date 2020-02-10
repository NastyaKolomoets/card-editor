import { ICard } from '../card';

export class DoorCard implements ICard {
  name: string;
  description: string;
  img: string;

  constructor(name: string) {
    this.name = name;
    this.description = '';
    this.img = '';
  }
}

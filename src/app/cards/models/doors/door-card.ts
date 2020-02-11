import { ICard } from '../card';

export class DoorCard implements ICard {
  key: string;
  type: string;
  name: string;
  description: string;
  img: string;

  constructor(name: string, type: string) {
    this.type = type;
    this.name = name;
    this.description = '';
    this.img = '';
  }

  getBackgroungImg(): string {
    return '../assets/door_back.png';
  }
}

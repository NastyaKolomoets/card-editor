import { Component } from '@angular/core';

@Component({
	selector: 'app-door'
})
export class DoorCardComponent {
  getBackgroundImg(): string {
    return '../assets/doors_back.png';
  }
}

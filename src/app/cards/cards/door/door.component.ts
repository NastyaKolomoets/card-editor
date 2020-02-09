import { Component } from '@angular/core';

@Component({
	selector: 'app-door'
})
export class DoorComponent {
  getBackgroundImg(): string {
    return '../assets/doors_back.png';
  }
}

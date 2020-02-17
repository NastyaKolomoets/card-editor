import { Component } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: 'door-card.component.html',
  styleUrls: ['door-card.component.css'] 
})
export class DoorCardComponent {
  getBackgroundImg(): string {
    return '../assets/doors_back.png';
  }
}

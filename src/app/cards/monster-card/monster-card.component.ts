import { Component, Input } from '@angular/core';
import { DoorCardComponent } from '../door-card/door-card.component';
import { MonsterCard } from 'src/app/models/doors/monster-card';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html',
	styleUrls: ['monster-card.component.css']
})
export class MonsterCardComponent extends DoorCardComponent {
	@Input() card: MonsterCard;

	get treasuresText() {
		switch (this.card.winTreasures) {
			case 1:
				return 'Скарб';
			case 2:
				return 'Скарби';
			default:
				return 'Скарбів';
		}
	}
}

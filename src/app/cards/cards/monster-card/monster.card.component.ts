import { Component, Input } from '@angular/core';
import { MonsterCard } from 'src/app/cards/models/doors/monster-card';
import { DoorComponent } from '../door/door.component';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster.card.component.html',
	styleUrls: ['monster.card.component.css']
})
export class MonsterCardComponent extends DoorComponent {
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

import { Component, Input } from '@angular/core';
import { MonsterCard } from '../../../models/doors/monster-card';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html',
	styleUrls: ['monster-card.component.css']
})
export class MonsterCardComponent implements CardTemplate {
	@Input() card: MonsterCard;

	get treasuresText() {
		switch (this.card.winTreasures) {
			case 1:
				return 'Скарб';
			case 2:
			case 3:
			case 4:
				return 'Скарби';
			default:
				return 'Скарбів';
		}
	}
}

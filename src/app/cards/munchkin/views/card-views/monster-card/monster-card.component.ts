import { Component, Input } from '@angular/core';
import { MonsterCard } from '../../../models/doors/monster-card';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html'
})
export class MonsterCardComponent implements CardTemplate {
	@Input() card: MonsterCard;

	get winLevelsText() {
		return this.card.winLevels > 1 ? `${this.card.winLevels} Рівні` : '';
	}

	get winTreasuresText() {
		let text = '';
		switch (this.card.winTreasures) {
			case 1:
				text = 'Скарб';
				break;
			case 2:
			case 3:
			case 4:
				text = 'Скарби';
				break;
			default:
				text = 'Скарбів';
		}

		return `${this.card.winTreasures} ${text}`;
	}
}

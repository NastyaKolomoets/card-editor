import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { MonsterCard } from '../model/monster-card';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html'
})
export class MonsterCardComponent implements CardTemplate {
	@Input() card: MonsterCard;

	get levelText() {
		return `Рівень ${this.card.level}`;
	}

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

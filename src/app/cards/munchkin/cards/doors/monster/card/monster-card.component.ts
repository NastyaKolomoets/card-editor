import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { MonsterCard } from '../model/monster-card';
import { prependRichText } from 'src/app/cards/munchkin/helpers/html-helper';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html'
})
export class MonsterCardComponent implements CardTemplate {
	@Input() card: MonsterCard;

	get level() {
		return `Рівень ${this.card.level}`;
	}

	get badStuff() {
		return prependRichText(this.card.badStuff, '<strong>Паскудство:</strong>', 'p');
		// return `<p><strong>Паскудство: </strong>${trimTag(this.card.badStuff, 'p')}</p>`;
	}

	get winLevels() {
		return this.card.winLevels > 1 ? `${this.card.winLevels} Рівні` : '';
	}

	get winTreasures() {
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

import { Component, Input } from '@angular/core';
import { MonsterCard } from '../../../models/doors/monster-card';
import { Template } from 'src/app/cards/infrastructure/template/template';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html',
	styleUrls: ['monster-card.component.css']
})
export class MonsterCardComponent implements Template {
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

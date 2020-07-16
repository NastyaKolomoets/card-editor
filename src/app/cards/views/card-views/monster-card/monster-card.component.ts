import { Component, Input } from '@angular/core';
import { MonsterCard } from 'src/app/cards/models/card/doors/monster-card';
import { getDoorsBackgroundImg } from '../helpers/helpers';

@Component({
	selector: 'app-monster-card',
	templateUrl: 'monster-card.component.html',
	styleUrls: ['monster-card.component.css']
})
export class MonsterCardComponent {
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

	get backgroundImg() {
		// return this.card.backgroundImage();
		return getDoorsBackgroundImg();
	}
}

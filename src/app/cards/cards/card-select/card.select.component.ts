import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-select',
	templateUrl: 'card.select.component.html',
	styleUrls: ['card.select.component.css']
})
export class CardSelectComponent {
	@Input() type: string;
	@Input() card: any;

	constructor() {
	}
}

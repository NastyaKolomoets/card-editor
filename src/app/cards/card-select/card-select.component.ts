import { Component, Input } from '@angular/core';
import { CardType } from '../../models/card-type';

@Component({
	selector: 'app-card-select',
	templateUrl: 'card-select.component.html',
	styleUrls: ['card-select.component.css']
})
export class CardSelectComponent {
	@Input() type: string;
	@Input() card: any;
}

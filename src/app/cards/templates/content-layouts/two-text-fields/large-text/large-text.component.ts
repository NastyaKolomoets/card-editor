import { Component } from '@angular/core';
import { TwoTextFieldsComponent } from '../two-text-fields.component';

@Component({
	selector: 'app-large-text-2',
	templateUrl: 'large-text.component.html',
	styleUrls: ['large-text.component.css']
})
export class LargeText2Component extends TwoTextFieldsComponent {
	constructor() {
		super();
	}
}

import { Component } from '@angular/core';
import { OneTextFieldComponent } from '../one-text-field.component';

@Component({
	selector: 'app-large-text-1',
	templateUrl: 'large-text.component.html',
	styleUrls: ['large-text.component.css']
})
export class LargeTextComponent extends OneTextFieldComponent {
	constructor() {
		super();
	}
}

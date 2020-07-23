import { Component } from '@angular/core';
import { TwoTextFieldsComponent } from '../two-text-fields.component';

@Component({
	selector: 'app-image-bottom-2',
	templateUrl: 'image-bottom.component.html',
	styleUrls: ['image-bottom.component.css']
})
export class ImageBottom2Component extends TwoTextFieldsComponent {
	constructor() {
		super();
	}
}

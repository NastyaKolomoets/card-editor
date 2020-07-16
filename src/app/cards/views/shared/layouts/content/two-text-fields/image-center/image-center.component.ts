import { Component } from '@angular/core';
import { TwoTextFieldsComponent } from '../two-text-fields.component';

@Component({
	selector: 'app-image-center-2',
	templateUrl: 'image-center.component.html',
	styleUrls: ['image-center.component.css']
})
export class ImageCenter2Component extends TwoTextFieldsComponent {
	constructor() {
		super();
	}
}

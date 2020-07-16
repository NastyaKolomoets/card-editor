import { Component } from '@angular/core';
import { TwoTextFieldsComponent } from '../two-text-fields.component';

@Component({
	selector: 'app-image-top-2',
	templateUrl: 'image-top.component.html',
	styleUrls: ['image-top.component.css']
})
export class ImageTop2Component extends TwoTextFieldsComponent {
	constructor() {
		super();
	}
}

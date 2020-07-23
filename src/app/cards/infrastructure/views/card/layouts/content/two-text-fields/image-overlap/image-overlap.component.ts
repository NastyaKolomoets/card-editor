import { Component } from '@angular/core';
import { TwoTextFieldsComponent } from '../two-text-fields.component';

@Component({
	selector: 'app-image-overlap-2',
	templateUrl: 'image-overlap.component.html',
	styleUrls: ['image-overlap.component.css']
})
export class ImageOverlap2Component extends TwoTextFieldsComponent {
	constructor() {
		super();
	}
}

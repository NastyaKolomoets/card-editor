import { Component } from '@angular/core';
import { OneTextFieldComponent } from '../one-text-field.component';

@Component({
	selector: 'app-image-overlap-1',
	templateUrl: 'image-overlap.component.html',
	styleUrls: ['image-overlap.component.css']
})
export class ImageOverlapComponent extends OneTextFieldComponent {
	constructor() {
		super();
	}
}

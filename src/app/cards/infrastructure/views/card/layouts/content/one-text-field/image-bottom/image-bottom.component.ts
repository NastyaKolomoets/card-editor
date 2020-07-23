import { Component } from '@angular/core';
import { OneTextFieldComponent } from '../one-text-field.component';

@Component({
	selector: 'app-image-bottom-1',
	templateUrl: 'image-bottom.component.html',
	styleUrls: ['image-bottom.component.css']
})
export class ImageBottomComponent extends OneTextFieldComponent {
	constructor() {
		super();
	}
}

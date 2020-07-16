import { Component } from '@angular/core';
import { OneTextFieldComponent } from '../one-text-field.component';

@Component({
	selector: 'app-image-top-1',
	templateUrl: 'image-top.component.html',
	styleUrls: ['image-top.component.css']
})
export class ImageTopComponent extends OneTextFieldComponent {
	constructor() {
		super();
	}
}

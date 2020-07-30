import { Component, Input } from '@angular/core';
import { BodyLayoutBaseComponent } from '../body-layout-base.component';

@Component({
	selector: 'app-large-text',
	templateUrl: 'large-text.component.html',
	styleUrls: ['large-text.component.css']
})
export class LargeTextComponent extends BodyLayoutBaseComponent {
	// @Input() textFields: string[];
	// @Input() imgUrl: string;
}

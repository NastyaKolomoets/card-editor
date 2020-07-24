import { Component, Input } from '@angular/core';
import { ContentLayoutBaseComponent } from '../content-layout-base.component';

@Component({
	selector: 'app-large-text',
	templateUrl: 'large-text.component.html',
	styleUrls: ['large-text.component.css']
})
export class LargeTextComponent extends ContentLayoutBaseComponent {
	// @Input() textFields: string[];
	// @Input() imgUrl: string;
}

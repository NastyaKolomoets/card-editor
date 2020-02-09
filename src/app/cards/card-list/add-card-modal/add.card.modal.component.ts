import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-add-card-modal',
	templateUrl: 'add.card.modal.component.html',
	styleUrls: ['add.card.modal.component.css']
})
export class AddCardModalComponent {
	name: string;

	constructor(
		private activeModal: NgbActiveModal
		) {
	}

	submit(): void {
		this.activeModal.close({
			name: this.name
		});
	}
}

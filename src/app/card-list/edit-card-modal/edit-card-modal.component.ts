import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICard } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
	selector: 'app-edit-card-modal',
	templateUrl: 'edit-card-modal.component.html',
	styleUrls: ['edit-card-modal.component.css']
})
export class AddCardModalComponent {
	@Input() card: ICard;

	constructor(
		private activeModal: NgbActiveModal,
		private cardsService: CardsService
	) {
	}

	submit(): void {
		if (this.card.name === null || this.card.name === '') {
			return;
		}

		this.cardsService.addOrUpdateCard(this.card);
		this.activeModal.close();
	}
}

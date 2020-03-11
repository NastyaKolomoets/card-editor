import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICard } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';
import { LayoutType } from 'src/app/models/layouts/layout';
import { CardTypes } from 'src/app/models/types/card-types';

@Component({
	selector: 'app-edit-card-modal',
	templateUrl: 'edit-card-modal.component.html',
	styleUrls: ['edit-card-modal.component.css']
})
export class EditCardModalComponent {
	@Input() card: ICard;

	constructor(
		public activeModal: NgbActiveModal,
		private cardsService: CardsService
	) {
	}

	get layoutType(): LayoutType {
		return CardTypes.getCardTypeDetails(this.card.type).layoutType;
	}

	submit(): void {
		if (this.card.name === undefined || this.card.name === null || this.card.name === '') {
			return;
		}

		this.cardsService.addOrUpdateCard(this.card);
		this.activeModal.close();
	}
}

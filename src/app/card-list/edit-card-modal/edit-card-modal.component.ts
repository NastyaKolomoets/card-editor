import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICard } from 'src/app/cards/models/card/card';
import { CardsService } from 'src/app/card-list/services/cards.service';
import { ILayout } from 'src/app/cards/models/layout/layout';
import { CardTypes } from 'src/app/cards/data/card-types';

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
	) { }

	get availableLayouts(): ILayout[] {
		return CardTypes.getCardTypeDetails(this.card.type).layouts;
	}

	submit(): void {
		if (this.card.name === undefined || this.card.name === null || this.card.name === '') {
			return;
		}

		this.cardsService.addOrUpdateCard(this.card);
		this.activeModal.close();
	}
}

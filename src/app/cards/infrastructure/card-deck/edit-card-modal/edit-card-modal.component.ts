import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import {
  Layout,
} from "src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/layouts/layout-model/layout";
import {
  LayoutFactory,
} from "src/app/cards/infrastructure/card-deck/edit-card-modal/edit-card/layouts/layout-model/layout-factory";
import {
  CardsService,
} from "src/app/cards/infrastructure/card-deck/services/cards.service";
import { Card } from "src/app/cards/infrastructure/card/card-model/card";

@Component({
	selector: "app-edit-card-modal",
	templateUrl: "edit-card-modal.component.html",
	styleUrls: ["edit-card-modal.component.scss"]
})
export class EditCardModalComponent {
	@Input() card: Card;

	constructor(
		public activeModal: NgbActiveModal,
		private cardsService: CardsService
	) { }

	get availableLayouts(): Layout[] {
		return this.card.type.availableLayouts.map(x => LayoutFactory.getLayout(x));
	}

	submit(): void {
		if (this.card.name === undefined || this.card.name === null || this.card.name === "") {
			return;
		}

		this.cardsService.addOrUpdateCard(this.card);
		this.activeModal.close();
	}
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { Card, CardType } from '../card/card';
import { CardGroup } from './deck-model/card-group';
import { CardsService } from './services/cards.service';
import { DeckService } from './services/deck.service';
import { CardFactory } from './services/card-factory';

@Component({
  selector: 'app-card-deck',
  templateUrl: 'card-deck.component.html',
  styleUrls: ['card-deck.component.css']
})
export class CardDeckComponent implements OnInit {
  groups: CardGroup[];
  cards: Card[];

  constructor(
    private modalService: NgbModal,
    private cardsService: CardsService,
    private deckService: DeckService,
    private cardFactory: CardFactory
  ) {
    this.groups = deckService.deck.groups;
  }

  ngOnInit(): void {
    this.cardsService.getAll()
      .subscribe(cards => {
        this.cards = Object.values((cards as Array<any>).reduce((prev, next) => prev = { ...prev, ...next }))
          .map(x => this.cardFactory.mapToCard(x));
      });
  }

  getCardsOfType(type: CardType): Card[] {
    return this.cards
      ? this.cards.filter(card => card.type.name === type.name)
      : [];
  }

  addCard(type: CardType) {
    const card = this.cardFactory.createCard(type);
    this.openModal(card);
  }

  editCard(card: Card) {
    this.openModal(card);
  }

  private openModal(card: Card) {
    const modalRef = this.modalService.open(EditCardModalComponent, { size: 'lg' });
    const modal = modalRef.componentInstance as EditCardModalComponent;
    modal.card = card;
  }
}

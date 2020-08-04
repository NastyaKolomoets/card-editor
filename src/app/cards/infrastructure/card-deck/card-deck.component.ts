import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { Card, CardType } from '../card/card';
import { CardGroup } from './deck-config/card-group';
import { CardsService } from './services/cards.service';
import { DeckConfigService } from './deck-config/deck-config.service';

@Component({
  selector: 'app-card-deck',
  templateUrl: 'card-deck.component.html',
  styleUrls: ['card-deck.component.css']
})
export class CardDeckComponent implements OnInit {
  groups: CardGroup[];
  cardTypes: Map<string, CardType[]>;
  cards: Card[];

  constructor(
    private modalService: NgbModal,
    private cardsService: CardsService,
    private deckService: DeckConfigService
  ) {
    this.groups = deckService.groups;
    this.cardTypes = deckService.cardTypes;
  }

  ngOnInit(): void {
    this.cardsService.getAll()
      .subscribe(cards => {
        this.cards = Object.values((cards as Array<any>).reduce((prev, next) => prev = { ...prev, ...next }))
          .map((x: { type: string }) => {
            const card = this.deckService.cards.get(x.type);
            return new card(x);
          });
      });
  }

  getCardsOfType(type: CardType): Card[] {
    return this.cards
      ? this.cards.filter(card => card.type.name === type.name)
      : [];
  }

  addCard(type: CardType) {
    const card = this.deckService.cards.get(type.name);
    this.openModal(new card());
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

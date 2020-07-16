import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { Router } from '@angular/router';
import { CardFactory } from '../cards/models/card/card-factory';
import { CardsService } from 'src/app/card-list/services/cards.service';
import { ICard } from '../cards/models/card/card';
import { CardType } from '../cards/models/card/card-type';
import { MonsterCard } from '../cards/models/card/doors/monster-card';
import { CardTypes } from '../cards/data/card-types';

@Component({
  selector: 'app-cards',
  templateUrl: 'card-list.component.html',
  styleUrls: ['card-list.component.css']
})
export class CardsComponent implements OnInit {
  cards: ICard[];

  constructor(
    private cardsService: CardsService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cardsService.getAll()
      .subscribe(cards => {
        this.cards = Object.values((cards as Array<any>).reduce((aggr, next) => aggr = { ...aggr, ...next }));
      });
  }

  getCardTypes(): CardType[] {
    return Object.values(CardType);
  }

  getCardTypeName(type: CardType): string {
    return CardTypes.getCardTypeDetails(type).pluralUkr;
  }

  getCardsOfType(type: CardType): ICard[] {
    return this.cards
      ? this.cards.filter(card => card.type === type)
      : [];
  }

  addCard(type: string) {
    const card = CardFactory.createCard(type);
    this.openModal(card);
  }

  editCard(card: ICard) {
    this.openModal(card);
  }

  private openModal(card: ICard) {
    const modalRef = this.modalService.open(EditCardModalComponent, { size: 'lg' });
    const modal = modalRef.componentInstance as EditCardModalComponent;
    modal.card = card;
  }
}

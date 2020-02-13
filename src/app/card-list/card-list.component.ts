import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { Router } from '@angular/router';
import { CardGeneratorHelper } from '../models/helpers/card-generator.helper';
import { CardsService } from 'src/app/services/cards.service';
import { ICard } from '../models/card';
import { CardType } from '../models/card-type';
import { MonsterCard } from '../models/doors/monster-card';
import { CardTypes } from '../models/types/card-types';

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
        this.cards = Object.values(cards[0]);
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
    const modalRef = this.modalService.open(AddCardModalComponent);
    const modal = modalRef.componentInstance as AddCardModalComponent;
    modal.card = CardGeneratorHelper.generateCard(type);
  }

  navigateToEdit(type: string, id: string): void {
    const routerLink = `/editor/${type}/${id}`;
    this.router.navigateByUrl(routerLink);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardModalComponent } from '../card-list/add-card-modal/add.card.modal.component';
import { Router } from '@angular/router';
import { CardGenerator } from '../models/card-generator';
import { CardsService } from 'src/app/services/cards.service';
import { ICard } from '../models/card';
import { CardType } from '../models/card-type';
import { MonsterCard } from '../models/doors/monster-card';

@Component({
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: ICard[];
  doorCardTypes = [];

  constructor(
    private cardsService: CardsService,
    private modalService: NgbModal,
    private router: Router,
    private generator: CardGenerator
  ) {
  }

  ngOnInit(): void {
    this.cardsService.getAll()
      .subscribe(cards => {
        this.cards = cards;
        this.doorCardTypes = Object.keys(cards);
      });
  }

  getCardTypes(type: string): string[] {
    return Object.values(CardType);
  }

  getCardsOfType(type: string): ICard[] {
    const cardsOfType = this.cards
      ? this.cards.filter(card => card.type === type)
      : [];
    switch (type) {
      case CardType.MONSTER:
        const test = cardsOfType as MonsterCard[];
        return test;
      default:
        return [];
    }
  }

  addCard(type: string) {
    const modalRef = this.modalService.open(AddCardModalComponent);
    modalRef.result.then(result => {
      if (result === null) {
        return;
      }

      this.cardsService.add(this.generator.generateCard(type, result.name)).then(() => {
        // this.navigateToEdit(type, id);
      });
    });
  }

  navigateToEdit(type: string, id: string): void {
    const routerLink = `/editor/${type}/${id}`;
    this.router.navigateByUrl(routerLink);
  }
}

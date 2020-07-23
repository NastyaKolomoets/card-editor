import { Component, OnInit, Input, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { Card } from '../../models/card';
import { CardType } from '../../models/card-type';
import { CardGroup } from '../../models/card-group';
import { CardFactory } from '../../models/card-factory';
import { CardsService } from '../../services/cards.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-cards',
  templateUrl: 'card-list.component.html',
  styleUrls: ['card-list.component.css']
})
export class CardsComponent implements OnInit {
  factory: CardFactory;
  groups: CardGroup[];
  cards: Card[];

  constructor(
    private cardsService: CardsService,
    private modalService: NgbModal,
    configService: ConfigService
  ) {
    this.factory = configService.factory;
    this.groups = configService.groups;
  }

  ngOnInit(): void {
    this.cardsService.getAll()
      .subscribe(cards => {
        this.cards = Object.values((cards as Array<any>).reduce((prev, next) => prev = { ...prev, ...next }))
          .map(x => this.factory.mapCard(x));
      });
  }

  getCardsOfType(type: CardType): Card[] {
    return this.cards
      ? this.cards.filter(card => card.type.name === type.name)
      : [];
  }

  addCard(type: CardType) {
    const card = this.factory.createCard(type);
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

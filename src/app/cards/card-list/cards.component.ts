import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DoorCard } from '../models/doors/door-card';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardModalComponent } from '../card-list/add-card-modal/add.card.modal.component';

class Cards {
  doors: any[];
  treasures: any[];
}

@Component({
  selector: 'app-cards',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css']
})
export class CardsComponent implements OnInit {
  cards$: Observable<any[]>;
  cards: Cards;
  doorCardTypes = [];

  constructor(
    public firebase: AngularFireDatabase,
    private modalService: NgbModal
    ) {
  }

  ngOnInit(): void {
      this.cards$ = this.firebase.list<Cards>('/').valueChanges();
      this.cards$.subscribe(cards => {
        this.cards = cards[0];
        this.doorCardTypes = Object.keys(cards[0].doors);
      });
  }

  getTypeName(type: string): string {
    return type.replace('_', ' ').toUpperCase();
  }

  getDoorsOfType(type: string): DoorCard[] {
    return Object.values(this.cards.doors[type]);
  }

  getDoorsBackgroundImg() {
    return '../assets/doors_back.png';
  }

  addCard(kind: string, type: string) {
    const modalRef = this.modalService.open(AddCardModalComponent);
    modalRef.result.then(result => {
      const uri = `/cards/${kind}/${type}`;
      const id = this.firebase.database.ref(uri).push().key;
      this.firebase.database.ref(`${uri}/${id}`).set({
        name: result.name
      });
    });

    const routerLink = `/editor/${type}`;
  }
}

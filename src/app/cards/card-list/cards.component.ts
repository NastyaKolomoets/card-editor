import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { DoorCard } from '../models/doors/door-card';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardModalComponent } from '../card-list/add-card-modal/add.card.modal.component';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { CardGenerator } from '../models/card-generator';

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
    private modalService: NgbModal,
    private router: Router,
    private generator: CardGenerator
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

  addCard(kind: string, type: string) {
    const modalRef = this.modalService.open(AddCardModalComponent);
    modalRef.result.then(result => {
      if (result === null) {
        return;
      }

      const uri = `/cards/${kind}/${type}`;
      const id = this.firebase.database.ref(uri).push().key;
      this.firebase.database.ref(`${uri}/${id}`).set(this.generator.generateCard(type, result.name)).then(() => {
        // this.navigateToEdit(type, id);
      });
    });
  }

  navigateToEdit(type: string, id: string): void {
    const routerLink = `/editor/${type}/${id}`;
    this.router.navigateByUrl(routerLink);
  }
}

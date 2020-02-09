import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

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
    public db: AngularFireDatabase
  ) {
  }

  ngOnInit(): void {
      this.cards$ = this.db.list<Cards>('/').valueChanges();
      this.cards$.subscribe(cards => {
        this.cards = cards[0];
        this.doorCardTypes = Object.keys(cards[0].doors);
      });
  }

  getTypeName(type: string): string {
    return type.replace('_', ' ').toUpperCase();
  }

  getDoorsOfType(type: string): any[] {
    return Object.values(this.cards.doors[type]);
  }
}

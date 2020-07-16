import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CardTypes } from '../../cards/data/card-types';
import { ICard } from '../../cards/models/card/card';

@Injectable()
export class CardsService {
  uri = '/cards';

  constructor(private firebase: AngularFireDatabase) {
  }

  getAll(): Observable<any> {
    return this.firebase.list<any>(`${this.uri}`).valueChanges();
  }

  add(card: ICard): Promise<any> {
    const key = this.firebase.database.ref(this.uri).push().key;
    card.key = key;
    return this.firebase.database.ref(`${this.uri}/${CardTypes.getCardType(card).getUri()}/${key}`).set(card);
  }

  addOrUpdateCard(card: ICard): Promise<any> {
    if (card.key === null) {
      card.key = this.firebase.database.ref(this.uri).push().key;
    }

    return this.firebase.database.ref(`${this.uri}/${CardTypes.getCardType(card).getUri()}/${card.key}`).set(card);
  }

  delete(card: ICard): Promise<any> {
    return this.firebase.database.ref(`${this.uri}/${CardTypes.getCardType(card).getUri()}/${card.key}`).remove();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ICard } from '../cards/models/card';
import { Observable } from 'rxjs';

@Injectable()
export class CardsService {
  uri = '/cards';

  constructor(private firebase: AngularFireDatabase) {
  }

  getAll(): Observable<ICard[]> {
    return this.firebase.list<ICard>(this.uri).valueChanges();
  }

  add(card: ICard): Promise<any> {
    const key = this.firebase.database.ref(this.uri).push().key;
    card.key = key;
    return this.firebase.database.ref(`${this.uri}/${key}`).set(card);
  }

  updateCard(card: ICard): Promise<any> {
    return this.firebase.database.ref(`${this.uri}/${card.key}`).set(card);
  }

  delete(card: ICard): Promise<any> {
    return this.firebase.database.ref(`${this.uri}/${card.key}`).remove();
  }
}

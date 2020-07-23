import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable()
export class CardsService {
  uri = '/cards';

  constructor(private firebase: AngularFireDatabase) {
  }

  getAll(): Observable<any> {
    return this.firebase.list<any>(`${this.uri}`).valueChanges();
  }

  add(card: Card): Promise<any> {
    const key = this.firebase.database.ref(this.uri).push().key;
    card.key = key;
    return this.firebase.database.ref(`${this.uri}/${card.type.namePlural}/${key}`).set(this.mapToDto(card));
  }

  addOrUpdateCard(card: Card): Promise<any> {
    if (card.key === null) {
      card.key = this.firebase.database.ref(this.uri).push().key;
    }

    return this.firebase.database.ref(`${this.uri}/${card.type.namePlural}/${card.key}`).set(this.mapToDto(card));
  }

  delete(card: Card): Promise<any> {
    return this.firebase.database.ref(`${this.uri}/${card.type.namePlural}/${card.key}`).remove();
  }

  mapToDto(card: Card): any {
    return { ...card, type: card.type.name, layout: card.layout.fieldsPosition };
  }
}

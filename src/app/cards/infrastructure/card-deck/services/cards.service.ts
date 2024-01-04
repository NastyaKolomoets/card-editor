import { Injectable } from '@angular/core';
import {
  Database,
  listVal,
  objectVal,
  push,
  ref,
  remove,
  set,
} from '@angular/fire/database';

import {
  map,
  Observable,
} from 'rxjs';

import { Card } from '../../card/card-model/card';

@Injectable()
export class CardsService {
  private readonly uri = "/cards";

  constructor(private firebase: Database) {
  }

  getAllCards(): Observable<Card[]> {
    const cardsRef = ref(this.firebase, this.uri);
    return objectVal(cardsRef)
      .pipe(map((dynamicCardTypes:any) => Object.values(dynamicCardTypes)));
  }

  getAllCardOfType(type: string): Observable<Card[]> {
    const cardsRef = ref(this.firebase, `${this.uri}/${type}`);
    return listVal(cardsRef);
  }

  addOrUpdateCard(card: Card): Promise<any> {
    if (card.key === null) {
      const location = ref(this.firebase, this.getCardRef(card));
      const newRef = push(location);
      if (newRef.key !== null) {
        card.key = newRef.key;
      }
    }

    const cardRef = ref(this.firebase, this.getCardRef(card))
    return set(cardRef, this.mapToDto(card));
  }

  private getCardRef(card: Card): string {
    return `${this.uri}/${card.type.namePlural}/${card.key}`;
  }

  delete(card: Card): Promise<any> {
    const cardRef = ref(this.firebase, this.getCardRef(card));
    return remove(cardRef);
  }

  mapToDto(card: Card): any {
    return { ...card, type: card.type.name };
  }
}

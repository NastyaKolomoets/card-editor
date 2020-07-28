import { Injectable } from '@angular/core';
import { Deck } from '../deck-model/deck';

@Injectable()
export class DeckService {
  deck: Deck;

  constructor(deck: Deck) {
    this.deck = deck;
  }
}

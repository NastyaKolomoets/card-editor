import { Component, OnInit } from '@angular/core';
// import { Card } from '../../infrastructure/card/card-model/card';
// import { CardsService } from '../../infrastructure/card-deck/services/cards.service';
// import { MunchkinCardResolver } from ../ models / munchkin - card - resolvery';
// import { DeckService } from '../../infrastructure/card-deck/services/deck.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {
  // factory: CardFactory;
  // cards: Card[];
  // constructor(
  //   config: ConfigService,
  //   private cardsService: CardsService
  // ) {
  //   this.factory = config.factory;
  // }

  ngOnInit() {
    // this.cardsService.getAll()
    //   .subscribe(cards => {
    //     // debugger;
    //     this.cards = Object.values((cards as Array<any>).reduce((prev, next) => prev = { ...prev, ...next }))
    //       .map(x => this.factory.mapCard(x));
    //   });

  }
}

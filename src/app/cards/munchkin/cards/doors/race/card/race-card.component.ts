import { Component, Input } from '@angular/core';
import { CardTemplate } from 'src/app/cards/infrastructure/cards';
import { RaceCard } from '../model/race-card';

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html'
})
export class RaceCardComponent implements CardTemplate {
  @Input() card: RaceCard;

  readonly raceText: string = 'Раса';
}

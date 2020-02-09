import { Component, OnInit } from '@angular/core';
import { MonsterCard } from 'src/app/cards/models/doors/monster-card';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-monster-edit',
  templateUrl: 'monster.edit.component.html',
  styleUrls: ['monster.edit.component.css']
})
export class MonsterEditComponent implements OnInit {
  card: MonsterCard;

  constructor(public firebase: AngularFireDatabase) {
  }

  ngOnInit(): void {

  }

  save(): void {
    const ref = this.firebase.database.ref('/cards/doors/monsters');
    ref.set(this.card);
  }
}

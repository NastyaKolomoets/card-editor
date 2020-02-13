import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MonsterCard } from 'src/app/models/doors/monster-card';

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

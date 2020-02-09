import { NgModule } from '@angular/core';
import { CardItemComponent } from './card-item/card.item.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSelectComponent } from './card-select/card.select.component';
import { MonsterCardComponent } from './monster-card/monster.card.component';

@NgModule({
  declarations: [
    CardSelectComponent,
    MonsterCardComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    NgbModalModule
  ],
  exports: [
    CardSelectComponent
  ]
})
export class CardsModule { }

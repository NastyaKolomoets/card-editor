import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card.item.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule
  ]
})
export class CardsModule { }

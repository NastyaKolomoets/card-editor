import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCardModalComponent } from './add-card-modal/add.card.modal.component';
import { CardsModule } from '../cards/cards.module';
import { CardSelectComponent } from '../cards/card-select/card.select.component';
import { CardGenerator } from '../models/card-generator';

@NgModule({
  declarations: [
    CardsComponent,
    AddCardModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    CardsModule
  ],
  providers: [
    CardGenerator
  ],
  entryComponents: [
    AddCardModalComponent
  ]
})
export class CardListModule { }

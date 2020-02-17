import { NgModule } from '@angular/core';
import { CardsComponent } from './card-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { CardsModule } from '../cards/cards.module';
import { CardGeneratorHelper } from '../models/helpers/card-generator.helper';
import { CardsService } from 'src/app/services/cards.service';

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
    CardGeneratorHelper,
    CardsService
  ],
  entryComponents: [
    AddCardModalComponent
  ]
})
export class CardListModule { }

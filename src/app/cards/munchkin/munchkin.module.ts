import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CardsModule } from '../infrastructure/cards';

import { MunchkinDeckComponent } from './deck/munchkin-deck.component';
import { MonsterCardComponent, MonsterEditComponent, MonsterType, MonsterCard } from './cards/doors/monster/monster';
import { ClassCardComponent, ClassType, ClassCard } from './cards/doors/class/class';
import { Doors } from './cards/doors/door-group';

@NgModule({
  declarations: [
    MunchkinDeckComponent,
    MonsterCardComponent,
    MonsterEditComponent,
    ClassCardComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CardsModule.forRoot([
      {
        cardType: MonsterType,
        belongsToGroup: Doors,
        useCard: MonsterCard,
        useCardTemplate: MonsterCardComponent,
        useEditTemplate: MonsterEditComponent
      },
      {
        cardType: ClassType,
        belongsToGroup: Doors,
        useCard: ClassCard,
        useCardTemplate: ClassCardComponent
      }
    ])
  ]
})
export class MunchkinModule { }

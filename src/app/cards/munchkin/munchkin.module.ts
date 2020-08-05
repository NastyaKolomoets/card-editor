import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CardsModule } from '../infrastructure/cards';

import { MunchkinDeckComponent } from './deck/munchkin-deck.component';
import { MonsterCardComponent, MonsterEditComponent, MonsterType, MonsterCard } from './cards/doors/monster/monster';
import { ClassCardComponent, ClassType, ClassCard, ClassEditComponent } from './cards/doors/class/class';
import { Doors } from './cards/doors/door-group';
import { RaceType, RaceCard, RaceCardComponent, RaceEditComponent } from './cards/doors/race/race';
import { CurseCardComponent, CurseEditComponent, CurseType, CurseCard } from './cards/doors/curse/curse';

@NgModule({
  declarations: [
    MunchkinDeckComponent,
    MonsterCardComponent,
    MonsterEditComponent,
    ClassCardComponent,
    ClassEditComponent,
    RaceCardComponent,
    RaceEditComponent,
    CurseCardComponent,
    CurseEditComponent
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
        cardType: RaceType,
        belongsToGroup: Doors,
        useCard: RaceCard,
        useCardTemplate: RaceCardComponent,
        useEditTemplate: RaceEditComponent
      },
      {
        cardType: ClassType,
        belongsToGroup: Doors,
        useCard: ClassCard,
        useCardTemplate: ClassCardComponent,
        useEditTemplate: ClassEditComponent
      },
      {
        cardType: MonsterType,
        belongsToGroup: Doors,
        useCard: MonsterCard,
        useCardTemplate: MonsterCardComponent,
        useEditTemplate: MonsterEditComponent
      },
      {
        cardType: CurseType,
        belongsToGroup: Doors,
        useCard: CurseCard,
        useCardTemplate: CurseCardComponent,
        useEditTemplate: CurseEditComponent
      }
    ])
  ]
})
export class MunchkinModule { }

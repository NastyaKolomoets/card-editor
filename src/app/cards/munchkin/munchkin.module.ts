import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CardsModule, Deck } from '../infrastructure/cards';

import { MunchkinDeckComponent } from './deck/munchkin-deck.component';
import { MunchkinCardTemplateResolver } from './munchkin-card-template-resolver';
import { MunchkinEditTemplateResolver } from './munchkin-edit-template-resolver';
import { MunchkinCardResolver } from './munchkin-card-resolver';
import { MonsterCardComponent, MonsterEditComponent } from './cards/doors/monster/monster';
import { ClassCardComponent } from './cards/doors/class/class';
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
    CardsModule.forRoot(
      new Deck([Doors]),
      new MunchkinCardResolver(),
      new MunchkinCardTemplateResolver(),
      new MunchkinEditTemplateResolver())
  ]
})
export class MunchkinModule { }

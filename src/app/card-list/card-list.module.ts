import { NgModule } from '@angular/core';
import { CardsComponent } from './card-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { CardsModule } from '../cards/cards.module';
import { CardGeneratorHelper } from '../models/helpers/card-generator.helper';
import { CardsService } from 'src/app/services/cards.service';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';
import { EditCardComponent } from './edit-card-modal/edit-card/edit-card.component';
import { EditableTextFieldComponent } from './edit-card-modal/edit-card/editable-text-field/editable-text-field.component';
import { MonsterEditComponent } from './edit-card-modal/edit-card/monster-edit/monster-edit.component';

@NgModule({
  declarations: [
    CardsComponent,
    EditCardModalComponent,
    EditableTextFieldComponent,
    EditCardComponent,
    MonsterEditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    CardsModule,
    FroalaViewModule,
    FroalaEditorModule
  ],
  providers: [
    CardGeneratorHelper,
    CardsService
  ],
  entryComponents: [
    EditCardModalComponent
  ]
})
export class CardListModule { }

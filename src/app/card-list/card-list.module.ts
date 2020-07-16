import { NgModule } from '@angular/core';
import { CardsComponent } from './card-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { CardsModule } from '../cards/cards.module';
import { CardFactory } from '../cards/models/card/card-factory';
import { CardsService } from 'src/app/card-list/services/cards.service';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';
import { EditCardComponent } from './edit-card-modal/edit-card/edit-card.component';
import { EditableTextFieldComponent } from './edit-card-modal/edit-card/editable-text-field/editable-text-field.component';
import { MonsterEditComponent } from './edit-card-modal/edit-card/monster-edit/monster-edit.component';
import { ImagesService } from '../shared/image-management/images.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LayoutsComponent } from './edit-card-modal/edit-card/layouts/layouts.component';

@NgModule({
  declarations: [
    CardsComponent,
    EditCardModalComponent,
    EditableTextFieldComponent,
    EditCardComponent,
    LayoutsComponent,
    MonsterEditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    CardsModule,
    FroalaViewModule,
    FroalaEditorModule
  ],
  providers: [
    CardFactory,
    CardsService,
    ImagesService
  ],
  entryComponents: [
    EditCardModalComponent
  ]
})
export class CardListModule { }

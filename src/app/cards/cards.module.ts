import { NgModule } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSelectComponent } from './card-select/card-select.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TextFieldComponent } from './templates/text-field/text-field.component';
import { TwoTextFieldsComponent } from './templates/two-text-fields/two-text-fields.component';
import { DoorCardComponent } from './door-card/door-card.component';
import { ClassCardComponent } from './class-card/class-card.component';

@NgModule({
  declarations: [
    CardSelectComponent,
    MonsterCardComponent,
    CardItemComponent,
    TextFieldComponent,
    TwoTextFieldsComponent,
    DoorCardComponent,
    ClassCardComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  exports: [
    CardSelectComponent
  ]
})
export class CardsModule { }

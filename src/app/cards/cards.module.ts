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
import { ImgFieldComponent } from './templates/img-field/img-field.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { OneTextFieldComponent } from './templates/content-layouts/one-text-field/one-text-field.component';
import { ImageTopComponent } from './templates/content-layouts/one-text-field/image-top/image-top.component';
import { ImageBottomComponent } from './templates/content-layouts/one-text-field/image-bottom/image-bottom.component';
import { ImageOverlapComponent } from './templates/content-layouts/one-text-field/image-overlap/image-overlap.component';
import { LargeTextComponent } from './templates/content-layouts/one-text-field/large-text/large-text.component';
import { TwoTextFieldsComponent } from './templates/content-layouts/two-text-fields/two-text-fields.component';
import { ImageTop2Component } from './templates/content-layouts/two-text-fields/image-top/image-top.component';
import { ImageCenter2Component } from './templates/content-layouts/two-text-fields/image-center/image-center.component';
import { ImageBottom2Component } from './templates/content-layouts/two-text-fields/image-bottom/image-bottom.component';
import { ImageOverlap2Component } from './templates/content-layouts/two-text-fields/image-overlap/image-overlap.component';
import { LargeText2Component } from './templates/content-layouts/two-text-fields/large-text/large-text.component';
import { ContentLayoutsComponent } from './templates/content-layouts/content-layouts.component';

@NgModule({
  declarations: [
    CardSelectComponent,
    MonsterCardComponent,
    CardItemComponent,
    TextFieldComponent,
    ImgFieldComponent,
    ClassCardComponent,
    OneTextFieldComponent,
    ImageTopComponent,
    ImageBottomComponent,
    ImageOverlapComponent,
    LargeTextComponent,
    TwoTextFieldsComponent,
    ImageTop2Component,
    ImageCenter2Component,
    ImageBottom2Component,
    ImageOverlap2Component,
    LargeText2Component,
    ContentLayoutsComponent
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

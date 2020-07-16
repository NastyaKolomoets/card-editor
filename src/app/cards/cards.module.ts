import { NgModule } from '@angular/core';
import { CardItemComponent } from './views/shared/card-item/card-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSelectComponent } from './views/card-views/card-select/card-select.component';
import { MonsterCardComponent } from './views/card-views/monster-card/monster-card.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TextFieldComponent } from './views/shared/layouts/fields/text-field/text-field.component';
import { ImgFieldComponent } from './views/shared/layouts/fields/img-field/img-field.component';
import { ClassCardComponent } from './views/card-views/class-card/class-card.component';
import { OneTextFieldComponent } from './views/shared/layouts/content/one-text-field/one-text-field.component';
import { ImageTopComponent } from './views/shared/layouts/content/one-text-field/image-top/image-top.component';
import { ImageBottomComponent } from './views/shared/layouts/content/one-text-field/image-bottom/image-bottom.component';
import { ImageOverlapComponent } from './views/shared/layouts/content/one-text-field/image-overlap/image-overlap.component';
import { LargeTextComponent } from './views/shared/layouts/content/one-text-field/large-text/large-text.component';
import { TwoTextFieldsComponent } from './views/shared/layouts/content/two-text-fields/two-text-fields.component';
import { ImageTop2Component } from './views/shared/layouts/content/two-text-fields/image-top/image-top.component';
import { ImageCenter2Component } from './views/shared/layouts/content/two-text-fields/image-center/image-center.component';
import { ImageBottom2Component } from './views/shared/layouts/content/two-text-fields/image-bottom/image-bottom.component';
import { ImageOverlap2Component } from './views/shared/layouts/content/two-text-fields/image-overlap/image-overlap.component';
import { ContentLayoutsComponent } from './views/shared/layouts/content/content-layouts.component';

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

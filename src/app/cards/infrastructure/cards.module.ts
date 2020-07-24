import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';

import { CardsService } from './services/cards.service';
import { CardContainerComponent } from './views/card/card-container/card-container.component';
import { CardBodyComponent } from './views/card/card-body/card-body.component';
import { TextFieldComponent } from './views/card/fields/text-field/text-field.component';
import { ImgFieldComponent } from './views/card/fields/img-field/img-field.component';
import { ImageTopComponent } from './views/card/layouts/content/image-top/image-top.component';
import { ImageBottomComponent } from './views/card/layouts/content/image-bottom/image-bottom.component';
import { ImageOverlapComponent } from './views/card/layouts/content/image-overlap/image-overlap.component';
import { LargeTextComponent } from './views/card/layouts/content/large-text/large-text.component';
import { ImageCenterComponent } from './views/card/layouts/content/image-center/image-center.component';
import { TemplateDirective } from './template/template.directive';
import { CardsComponent } from './views/card-list/card-list.component';
import { EditCardModalComponent } from './views/card-list/edit-card-modal/edit-card-modal.component';
import { EditableTextFieldComponent } from './views/card-list/edit-card-modal/edit-card/editable-text-field/editable-text-field.component';
import { EditCardComponent } from './views/card-list/edit-card-modal/edit-card/edit-card.component';
import { LayoutsComponent } from './views/card-list/edit-card-modal/edit-card/layouts/layouts.component';
import { MonsterEditComponent } from '../munchkin/views/card-edit-views/monster-edit/monster-edit.component';
import { ConfigService } from './services/config.service';
import { ImagesService } from './services/images.service';
import { EditTemplateService } from './services/edit-template.service';
import { CardTemplateService } from './services/card-template.service';
import { TemplateComponentFactory } from './services/template-component-factory';
import { ContentLayoutBaseComponent } from './views/card/layouts/content/content-layout-base.component';
import { ContentLayoutComponent } from './views/card/layouts/content/content-layout.component';

@NgModule({
  declarations: [
    CardContainerComponent,
    CardBodyComponent,
    TextFieldComponent,
    ImgFieldComponent,
    ImageTopComponent,
    ImageBottomComponent,
    ImageOverlapComponent,
    LargeTextComponent,
    ImageCenterComponent,
    ContentLayoutBaseComponent,
    ContentLayoutComponent,
    TemplateDirective,
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
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  exports: [
    CardContainerComponent,
    CardBodyComponent,
    TextFieldComponent,
    ImgFieldComponent,
    ContentLayoutComponent,
    CardsComponent
  ],
  providers: [
    ConfigService,
    CardsService,
    ImagesService,
    CardTemplateService,
    EditTemplateService,
    TemplateComponentFactory
  ],
  entryComponents: [
    EditCardModalComponent
  ]
})
export class CardsModule { }

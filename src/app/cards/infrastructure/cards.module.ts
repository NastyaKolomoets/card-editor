import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';

import {
  CardDeckComponent,
  EditCardModalComponent, EditableTextFieldComponent, EditCardComponent, LayoutsComponent,
  DeckService, ImagesService, EditTemplateService, CardsService,
  CardFactory, CardResolver
} from './card-deck/card-deck';

import {
  TemplateModule, TemplateResolver
} from './template/template';

import {
  CardType, CardContainerComponent, CardTemplateService,
  CardBodyComponent, CardContentComponent,
  ContentLayoutBaseComponent,
  TextFieldComponent, ImgFieldComponent,
  ImageTopComponent, ImageBottomComponent, ImageOverlapComponent, LargeTextComponent, ImageCenterComponent,
  ContentLayoutResolver, ContentLayoutService
} from './card/card';

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
    CardContentComponent,
    CardDeckComponent,
    EditCardModalComponent,
    EditableTextFieldComponent,
    EditCardComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    TemplateModule
  ],
  exports: [
    CardContainerComponent,
    CardBodyComponent,
    CardContentComponent,
    TextFieldComponent,
    ImgFieldComponent,
    CardDeckComponent,
    EditableTextFieldComponent
  ],
  providers: [
    // CardFactory,
    DeckService,
    CardsService,
    ImagesService,
    // CardTemplateService,
    EditTemplateService,
    { provide: ContentLayoutService, useValue: new ContentLayoutService(new ContentLayoutResolver()) }
    // TemplateComponentFactory
  ],
  entryComponents: [
    EditCardModalComponent
  ]
})
export class CardsModule {
  static forRoot(
    cardResolver: CardResolver,
    cardTemplateResolver: TemplateResolver<CardType>,
    editTemplateResolver: TemplateResolver<CardType>
  ): ModuleWithProviders {
    return {
      ngModule: CardsModule,
      providers: [
        { provide: CardFactory, useFactory: () => new CardFactory(cardResolver) },
        { provide: CardTemplateService, useFactory: () => new CardTemplateService(cardTemplateResolver) },
        { provide: EditTemplateService, useFactory: () => new EditTemplateService(editTemplateResolver) },
      ]
    };
  }
}

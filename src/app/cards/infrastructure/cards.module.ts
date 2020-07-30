import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';

import {
  CardDeckComponent,
  EditCardModalComponent, EditableTextFieldComponent, EditCardComponent, LayoutsComponent,
  DeckConfigService, ImagesService, EditTemplateService, CardsService,
  CardFactory, CardResolver, DeckConfig, CardGroup
} from './card-deck/card-deck';

import {
  TemplateModule, TemplateResolver
} from './template/template';

import {
  CardType, CardContainerComponent, CardTemplateService,
  CardBodyComponent, CardContentComponent,
  BodyLayoutBaseComponent,
  TextFieldComponent, ImgFieldComponent,
  ImageTopComponent, ImageBottomComponent, ImageOverlapComponent, LargeTextComponent, ImageCenterComponent,
  BodyLayoutResolver, BodyLayoutService, CardHeaderComponent, CardFooterComponent, CardTemplate, Card
} from './card/card';
import { EditCardTemplate } from './card-deck/edit-card-modal/edit-card/edit-card-template';
import { CardTypeConfig } from './cards';
import { CardTemplateResolver } from './card/card-container/card-template-resolver';
import { EditTemplateResolver } from './card-deck/edit-card-modal/edit-card/edit-template-resolver';

@NgModule({
  declarations: [
    CardContainerComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    TextFieldComponent,
    ImgFieldComponent,
    ImageTopComponent,
    ImageBottomComponent,
    ImageOverlapComponent,
    LargeTextComponent,
    ImageCenterComponent,
    BodyLayoutBaseComponent,
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
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardContentComponent,
    TextFieldComponent,
    ImgFieldComponent,
    CardDeckComponent,
    EditableTextFieldComponent
  ],
  providers: [
    DeckConfigService,
    CardsService,
    ImagesService,
    CardTemplateResolver,
    CardTemplateService,
    EditTemplateResolver,
    EditTemplateService,
    { provide: BodyLayoutService, useValue: new BodyLayoutService(new BodyLayoutResolver()) }
  ],
  entryComponents: [
    EditCardModalComponent
  ]
})
export class CardsModule {
  static forRoot(config: CardTypeConfig[]
    // deck: Deck,
    // cardResolver: CardResolver,
    // cardTemplateResolver: TemplateResolver<CardType>,
    // editTemplateResolver: TemplateResolver<CardType>
  ): ModuleWithProviders {
    // registerCardGroup(cardGroup: CardGroup) {
    //   this.deck.groups.push(cardGroup);
    // }

    // registerCardType(cardType: CardType, cardGroup: CardGroup) {
    //   this.deck.groups.find(x => x.name === cardGroup.name).cardTypes.push(cardType);
    // }
    return {
      ngModule: CardsModule,
      providers: [
        { provide: DeckConfigService, useValue: new DeckConfigService(new DeckConfig(config)) },
        // { provide: CardFactory, useFactory: () => new CardFactory(cardResolver) },
        // { provide: CardTemplateService, useFactory: () => new CardTemplateService(cardTemplateResolver) },
        // { provide: EditTemplateService, useFactory: () => new EditTemplateService(editTemplateResolver) },
      ]
    };
  }
}

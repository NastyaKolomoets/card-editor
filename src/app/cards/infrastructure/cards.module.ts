import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import {
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import {
  getDatabase,
  provideDatabase,
} from '@angular/fire/database';
import {
  getStorage,
  provideStorage,
} from '@angular/fire/storage';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  FroalaEditorModule,
  FroalaViewModule,
} from 'angular-froala-wysiwyg';
import { environment } from 'environments/environment';

import {
  NgbModalModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import {
  CardDeckComponent,
  CardsService,
  CardTypeConfig,
  DeckConfig,
  DeckConfigService,
  EditableNumberComponent,
  EditableRichTextComponent,
  EditableStringComponent,
  EditCardComponent,
  EditCardModalComponent,
  EditTemplateService,
  LayoutsComponent,
} from './card-deck/card-deck';
import {
  EditTemplateResolver,
} from './card-deck/edit-card-modal/edit-card/edit-template-resolver';
import {
  BodyLayoutBaseComponent,
  BodyLayoutResolver,
  BodyLayoutService,
  CardBodyComponent,
  CardContainerComponent,
  CardContentComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CardTemplateService,
  ImageBottomComponent,
  ImageCenterComponent,
  ImageOverlapComponent,
  ImageTopComponent,
  ImgFieldComponent,
  LargeTextComponent,
  TextFieldComponent,
} from './card/card';
import {
  CardTemplateResolver,
} from './card/card-container/card-template-resolver';
import { TemplateModule } from './template/template';

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
    EditableRichTextComponent,
    EditableStringComponent,
    EditableNumberComponent,
    EditCardComponent,
    LayoutsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    TemplateModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
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
    EditableRichTextComponent,
    EditableStringComponent,
    EditableNumberComponent,
  ],
  providers: [
    DeckConfigService,
    CardsService,
    CardTemplateResolver,
    CardTemplateService,
    EditTemplateResolver,
    EditTemplateService,
    { provide: BodyLayoutService, useValue: new BodyLayoutService(new BodyLayoutResolver()) },
  ]
})
export class CardsModule {
  static forRoot(config: CardTypeConfig[]): ModuleWithProviders<CardsModule> {
    return {
      ngModule: CardsModule,
      providers: [
        { provide: DeckConfigService, useValue: new DeckConfigService(new DeckConfig(config)) },
      ]
    };
  }
}

import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FroalaViewModule, FroalaEditorModule } from "angular-froala-wysiwyg";

import {
  CardDeckComponent,
  EditCardModalComponent, EditCardComponent, LayoutsComponent,
  DeckConfigService, ImagesService, EditTemplateService, CardsService,
  DeckConfig,
  CardTypeConfig,
  EditableRichTextComponent,
  EditableStringComponent,
  EditableNumberComponent,
} from "./card-deck/card-deck";

import {
  TemplateModule,
} from "./template/template";

import {
  CardContainerComponent, CardTemplateService,
  CardBodyComponent, CardContentComponent,
  BodyLayoutBaseComponent,
  TextFieldComponent, ImgFieldComponent,
  ImageTopComponent, ImageBottomComponent, ImageOverlapComponent, LargeTextComponent, ImageCenterComponent,
  BodyLayoutResolver, BodyLayoutService, CardHeaderComponent, CardFooterComponent,
} from "./card/card";
import { CardTemplateResolver } from "./card/card-container/card-template-resolver";
import { EditTemplateResolver } from "./card-deck/edit-card-modal/edit-card/edit-template-resolver";

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
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    TemplateModule,
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
    ImagesService,
    CardTemplateResolver,
    CardTemplateService,
    EditTemplateResolver,
    EditTemplateService,
    { provide: BodyLayoutService, useValue: new BodyLayoutService(new BodyLayoutResolver()) },
  ],
  entryComponents: [
    EditCardModalComponent,
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

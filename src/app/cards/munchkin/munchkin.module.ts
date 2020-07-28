import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonsterCardComponent } from './views/card-views/monster-card/monster-card.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ClassCardComponent } from './views/card-views/class-card/class-card.component';
// import { DeckConfig } from '../infrastructure/models/config';
// import { MunchkinConfig } from './models/config.service';
import { ListViewComponent } from './views/list-view.component';
import { DeckService } from '../infrastructure/card-deck/services/deck.service';
import { CardsService } from '../infrastructure/card-deck/services/cards.service';
import { MunchkinCardTemplateResolver } from './views/card-views/munchkin-card-template-resolver';
import { MunchkinEditTemplateResolver } from './views/card-edit-views/munchkin-edit-template-resolver';
import { CardsModule } from '../infrastructure/cards.module';
// import { CardTemplateService } from '../infrastructure/card/card-container/card-template.service';
// import { EditTemplateService } from '../infrastructure/edit-card-modal/edit-card/edit-template.service';
// import { Deck } from '../infrastructure/card-deck/card-deck';
// import { Doors } from './models/card-groups/door-group';
// import { CardFactory } from '../infrastructure/card-deck/services/card-factory';
import { MunchkinCardResolver } from './models/munchkin-card-resolver';
import { MonsterEditComponent } from './views/card-edit-views/monster-edit/monster-edit.component';
import { Deck } from '../infrastructure/card-deck/card-deck';
import { Doors } from './models/card-groups/door-group';

@NgModule({
  declarations: [
    MonsterEditComponent,
    MonsterCardComponent,
    ClassCardComponent,
    ListViewComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CardsModule.forRoot(
      new MunchkinCardResolver(),
      new MunchkinCardTemplateResolver(),
      new MunchkinEditTemplateResolver())
  ],
  providers: [
    // { provide: DeckConfig, useValue: MunchkinConfig },
    // { provide: CardFactory, useFactory: () => new CardFactory(new MunchkinCardResolver()) },
    { provide: DeckService, useFactory: () => new DeckService(new Deck([Doors])) },
    // { provide: CardTemplateService, useFactory: () => new CardTemplateService(new MunchkinCardTemplateResolver()) },
    // { provide: EditTemplateService, useFactory: () => new EditTemplateService(new MunchkinEditTemplateResolver()) },
    // DeckService,
    CardsService
  ]
})
export class MunchkinModule { }

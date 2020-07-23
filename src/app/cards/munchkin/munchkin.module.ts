import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonsterCardComponent } from './views/card-views/monster-card/monster-card.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ClassCardComponent } from './views/card-views/class-card/class-card.component';
import { DeckConfig } from '../infrastructure/models/config';
import { MunchkinConfig } from './models/config.service';
import { ListViewComponent } from './views/list-view.component';
import { ConfigService } from '../infrastructure/services/config.service';
import { CardsService } from '../infrastructure/services/cards.service';
import { MunchkinCardTemplateResolver } from './views/card-views/munchkin-card-template-resolver';
import { MunchkinEditTemplateResolver } from './views/card-edit-views/munchkin-edit-template-resolver';
import { CardsModule } from '../infrastructure/cards.module';
import { CardTemplateService } from '../infrastructure/services/card-template.service';
import { EditTemplateService } from '../infrastructure/services/edit-template.service';

// export function configFactory(): DeckConfig {
//   return {
//     cardGroups: [Doors],
//     cardFactory: new MunchkinCardFactory()
//   };
// }

@NgModule({
  declarations: [
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
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CardsModule
  ],
  providers: [
    { provide: DeckConfig, useValue: MunchkinConfig },
    { provide: CardTemplateService, useFactory: () => new CardTemplateService(new MunchkinCardTemplateResolver()) },
    { provide: EditTemplateService, useFactory: () => new EditTemplateService(new MunchkinEditTemplateResolver()) },
    ConfigService,
    CardsService
  ]
})
export class MunchkinModule { }

// import { NgModule, InjectionToken, inject } from '@angular/core';
// import { CardsComponent } from './card-list.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { FormsModule } from '@angular/forms';
// import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
// import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';
// import { EditCardComponent } from './edit-card-modal/edit-card/edit-card.component';
// import { EditableTextFieldComponent } from './edit-card-modal/edit-card/editable-text-field/editable-text-field.component';
// import { MonsterEditComponent } from '../../../munchkin/views/card-edit-views/monster-edit/monster-edit.component';
// import { ImagesService } from '../../services/images.service';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { LayoutsComponent } from './edit-card-modal/edit-card/layouts/layouts.component';
// import { CardsService } from 'src/app/cards/infrastructure/services/cards.service';
// import { ConfigService } from '../../services/config.service';
// import { CardModule } from '../card/card.module';
// import { TemplateResolver } from '../../template/template-resolver';
// import { TemplateService } from '../../services/template.service';

// export const CardTemplateResolver = new InjectionToken<TemplateResolver>('Resolver for card templates');

// export const CardTemplateService = new InjectionToken<TemplateService>(
//   'Service for cards templates',
//   { providedIn: 'root', factory: () => new TemplateService(inject(CardTemplateResolver)) });

// export const CardEditTemplateResolver = new InjectionToken<TemplateResolver>('Resolver for card edit templates');

// export const CardEditTemplateService = new InjectionToken<TemplateService>(
//   'Service for card edit templates',
//   { providedIn: 'root', factory: () => new TemplateService(inject(CardEditTemplateResolver)) });

// @NgModule({
//   declarations: [
//     CardsComponent,
//     EditCardModalComponent,
//     EditableTextFieldComponent,
//     EditCardComponent,
//     LayoutsComponent,
//     MonsterEditComponent
//   ],
//   imports: [
//     BrowserModule,
//     AngularFireDatabaseModule,
//     AngularFireStorageModule,
//     FormsModule,
//     NgbModule,
//     NgbModalModule,
//     FroalaViewModule,
//     FroalaEditorModule,
//     CardModule
//   ],
//   exports: [
//     CardsComponent
//   ],
//   providers: [
//     ConfigService,
//     CardsService,
//     ImagesService
//   ],
//   entryComponents: [
//     EditCardModalComponent
//   ]
// })
// export class CardListModule { }

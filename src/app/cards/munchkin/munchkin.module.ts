import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  FroalaEditorModule,
  FroalaViewModule,
} from 'angular-froala-wysiwyg';

import {
  NgbModalModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

import { CardsModule } from '../infrastructure/cards';
import {
  ClassCard,
  ClassCardComponent,
  ClassEditComponent,
  ClassType,
} from './cards/doors/class/class';
import {
  CurseCard,
  CurseCardComponent,
  CurseEditComponent,
  CurseType,
} from './cards/doors/curse/curse';
import { Doors } from './cards/doors/door-group';
import {
  HirelingCard,
  HirelingCardComponent,
  HirelingEditComponent,
  HirelingType,
} from './cards/doors/hireling/hireling';
import {
  MonsterEnhancerCard,
  MonsterEnhancerCardComponent,
  MonsterEnhancerEditComponent,
  MonsterEnhancerType,
} from './cards/doors/monster-enhancer/monster-enhancer';
import {
  MonsterCard,
  MonsterCardComponent,
  MonsterEditComponent,
  MonsterType,
} from './cards/doors/monster/monster';
import {
  OtherDoorCard,
  OtherDoorCardComponent,
  OtherDoorEditComponent,
  OtherDoorType,
} from './cards/doors/other-door/other-door';
import {
  RaceCard,
  RaceCardComponent,
  RaceEditComponent,
  RaceType,
} from './cards/doors/race/race';
import {
  LevelUpCard,
  LevelUpCardComponent,
  LevelUpEditComponent,
  LevelUpType,
} from './cards/treasures/level-up/level-up';
import {
  ReusableItemCard,
  ReusableItemCardComponent,
  ReusableItemEditComponent,
  ReusableItemType,
} from './cards/treasures/reusable-item/reusable-item';
import {
  SingleUseItemCard,
  SingleUseItemCardComponent,
  SingleUseItemEditComponent,
  SingleUseItemType,
} from './cards/treasures/single-use-item/single-use-item';
import { Treasures } from './cards/treasures/treasure-group';
import { MunchkinDeckComponent } from './deck/munchkin-deck.component';

@NgModule({
  declarations: [
    MunchkinDeckComponent,
    MonsterCardComponent,
    MonsterEditComponent,
    ClassCardComponent,
    ClassEditComponent,
    RaceCardComponent,
    RaceEditComponent,
    CurseCardComponent,
    CurseEditComponent,
    MonsterEnhancerCardComponent,
    MonsterEnhancerEditComponent,
    OtherDoorCardComponent,
    OtherDoorEditComponent,
    HirelingCardComponent,
    HirelingEditComponent,
    ReusableItemCardComponent,
    ReusableItemEditComponent,
    SingleUseItemCardComponent,
    SingleUseItemEditComponent,
    LevelUpCardComponent,
    LevelUpEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CardsModule.forRoot([
      {
        cardType: RaceType,
        belongsToGroup: Doors,
        useCard: RaceCard,
        useCardTemplate: RaceCardComponent,
        useEditTemplate: RaceEditComponent
      },
      {
        cardType: ClassType,
        belongsToGroup: Doors,
        useCard: ClassCard,
        useCardTemplate: ClassCardComponent,
        useEditTemplate: ClassEditComponent
      },
      {
        cardType: MonsterType,
        belongsToGroup: Doors,
        useCard: MonsterCard,
        useCardTemplate: MonsterCardComponent,
        useEditTemplate: MonsterEditComponent
      },
      {
        cardType: CurseType,
        belongsToGroup: Doors,
        useCard: CurseCard,
        useCardTemplate: CurseCardComponent,
        useEditTemplate: CurseEditComponent
      },
      {
        cardType: MonsterEnhancerType,
        belongsToGroup: Doors,
        useCard: MonsterEnhancerCard,
        useCardTemplate: MonsterEnhancerCardComponent,
        useEditTemplate: MonsterEnhancerEditComponent
      },
      {
        cardType: HirelingType,
        belongsToGroup: Doors,
        useCard: HirelingCard,
        useCardTemplate: HirelingCardComponent,
        useEditTemplate: HirelingEditComponent
      },
      {
        cardType: OtherDoorType,
        belongsToGroup: Doors,
        useCard: OtherDoorCard,
        useCardTemplate: OtherDoorCardComponent,
        useEditTemplate: OtherDoorEditComponent
      },
      {
        cardType: ReusableItemType,
        belongsToGroup: Treasures,
        useCard: ReusableItemCard,
        useCardTemplate: ReusableItemCardComponent,
        useEditTemplate: ReusableItemEditComponent
      },
      {
        cardType: SingleUseItemType,
        belongsToGroup: Treasures,
        useCard: SingleUseItemCard,
        useCardTemplate: SingleUseItemCardComponent,
        useEditTemplate: SingleUseItemEditComponent
      },
      {
        cardType: LevelUpType,
        belongsToGroup: Treasures,
        useCard: LevelUpCard,
        useCardTemplate: LevelUpCardComponent,
        useEditTemplate: LevelUpEditComponent
      }
    ])
  ]
})
export class MunchkinModule { }

import { CardGroup } from 'src/app/cards/infrastructure/cards';
import { ClassType } from './class/class';
import { MonsterType } from './monster/monster';
// import { RaceType, ClassType, MonsterType, CurseType, MonsterEnhancerType, OtherDoorType } from '../../models/card-types/door-types';

export const Doors: CardGroup = {
  name: 'door',
  displayName: 'Двері',
  displayNamePlural: 'Двері',
  cardTypes: [
    // RaceType,
    ClassType,
    MonsterType
    // CurseType,
    // MonsterEnhancerType,
    // OtherDoorType
  ]
};

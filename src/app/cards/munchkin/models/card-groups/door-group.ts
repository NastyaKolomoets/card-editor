import { CardGroup } from 'src/app/cards/infrastructure/models/card-group';
import { RaceType, ClassType, MonsterType, CurseType, MonsterEnhancerType, OtherDoorType } from '../card-types/door-types';
export const Doors: CardGroup = {
  name: 'door',
  displayName: 'Двері',
  displayNamePlural: 'Двері',
  cardTypes: [
    RaceType,
    ClassType,
    MonsterType,
    CurseType,
    MonsterEnhancerType,
    OtherDoorType
  ]
};

import { DeckConfig } from '../../infrastructure/models/config';
import { MunchkinCardFactory } from './card-factory';
import { Doors } from './card-groups/door-group';

export const MunchkinConfig: DeckConfig = {
  cardGroups: [Doors],
  cardFactory: new MunchkinCardFactory()
};

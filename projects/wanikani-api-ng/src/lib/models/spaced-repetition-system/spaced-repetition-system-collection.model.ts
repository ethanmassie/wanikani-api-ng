import { Pages } from '../pages.model';
import { SpacedRepetitionSystem } from './spaced-repetition-system.model';

export interface SpacedRepetitionSystemCollection {
  object:           'collection';
  url:              string;
  pages:            Pages;
  total_count:      number;
  data_updated_at:  Date;
  data:             SpacedRepetitionSystem[];
}
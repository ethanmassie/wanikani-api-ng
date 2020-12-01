import { SpacedRepetitionSystemData } from './spaced-repetition-system-data.model';

export interface SpacedRepetitionSystem {
  id:               number;
  object:           'spaced_repetition_system';
  url:              string;
  data_updated_at:  Date;
  data:             SpacedRepetitionSystemData;
}
import { LevelProgressionData } from './level-progression-data.model';

export interface LevelProgression {
  id:               number;
  object:           'level_progression';
  url:              string;
  date_updated_at:  Date;
  data:             LevelProgressionData;
}
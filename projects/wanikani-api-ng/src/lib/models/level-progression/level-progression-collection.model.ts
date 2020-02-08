import { Pages } from '../pages.model';
import { LevelProgression } from './level-progression.model';

export interface LevelProgressionCollection {
  object:           'collection';
  url:              string;
  pages:            Pages;
  total_count:      number;
  data_updated_at:  Date;
  data:             LevelProgression[];
}
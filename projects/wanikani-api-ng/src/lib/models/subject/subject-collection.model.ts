import { Pages } from '../pages.model';
import { Subject } from './subject.model';

export interface SubjectCollection {
  object:           'collection';
  url:              string;
  pages:            Pages;
  total_count:      number;
  data_updated_at:  Date;
  data:             Subject[];
}
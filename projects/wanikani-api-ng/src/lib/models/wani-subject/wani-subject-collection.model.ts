import { Pages } from '../pages.model';
import { WaniSubject } from './wani-subject.model';

export interface WaniSubjectCollection {
  object:           'collection';
  url:              string;
  pages:            Pages;
  total_count:      number;
  data_updated_at:  Date;
  data:             WaniSubject[];
}
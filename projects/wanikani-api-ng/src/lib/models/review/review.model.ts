import { ReviewData } from './review-data.model';

export interface Review {
  id:               number;
  object:           'review';
  url:              string;
  data_updated_at:  Date;
  data:             ReviewData;
}
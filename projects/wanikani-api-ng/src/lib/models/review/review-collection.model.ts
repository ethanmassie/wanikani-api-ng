import { Pages } from '../pages.model';
import { Review } from './review.model';

export interface ReviewCollection {
  object: 'collection';
  url: string;
  pages: Pages;
  total_count: number;
  data_updated_at: Date;
  data: Review[];
}

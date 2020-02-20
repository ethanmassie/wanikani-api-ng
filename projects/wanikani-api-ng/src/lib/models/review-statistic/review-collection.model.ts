import { Pages } from '../pages.model';
import { ReviewStatistic } from './review-statistic.model';

export interface ReviewStatisticCollection {
  object: 'collection',
  url: string;
  pages: Pages;
  total_count: number;
  data_updated_at: Date;
  data: ReviewStatistic[];
}
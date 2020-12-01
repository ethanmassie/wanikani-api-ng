import { ReviewStatisticData } from './review-statistic-data.model';

export interface ReviewStatistic {
  id: number;
  object: 'review_statistic';
  url: string;
  data_updated_at: Date;
  data: ReviewStatisticData;
}

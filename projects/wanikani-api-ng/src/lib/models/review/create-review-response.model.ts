import { Review } from './review.model';
import { Assignment } from '../assignment/assignment.model';
import { ReviewStatistic } from '../review-statistic/review-statistic.model';

export interface CreateReviewResponse extends Review {
  resources_updated: {
    assignment: Assignment;
    review_statistic: ReviewStatistic;
  };
}

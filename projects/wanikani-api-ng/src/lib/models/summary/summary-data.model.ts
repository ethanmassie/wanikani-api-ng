import { WaniSubjectList } from '../wani-subject/wani-subject-list.model';

export interface SummaryData {
  lessons: WaniSubjectList[];
  next_reviews_at: Date;
  reviews: WaniSubjectList[];
}

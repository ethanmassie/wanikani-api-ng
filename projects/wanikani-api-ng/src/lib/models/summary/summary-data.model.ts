import { WaniSubjectList } from '../wani-subject-list.model';

export interface SummaryData {
    lessons:            WaniSubjectList[];
    next_reviews_at:    Date;
    reviews:            WaniSubjectList[];
}
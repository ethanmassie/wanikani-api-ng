import { SubjectList } from '../subject-list.model';

export interface SummaryData {
    lessons:            SubjectList[];
    next_reviews_at:    Date;
    reviews:            SubjectList[];
}
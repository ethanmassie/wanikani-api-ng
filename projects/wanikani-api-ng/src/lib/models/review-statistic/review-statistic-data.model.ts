import { WaniSubjectType } from '../../enums/subject-type.enum';

export interface ReviewStatisticData {
  created_at:             Date;
  subject_id:             number;
  subject_type:           WaniSubjectType;
  meaning_correct:        number;
  meaning_incorrect:      number;
  meaning_max_streak:     number;
  meaning_current_streak: number;
  reading_correct:        number;
  reading_incorrect:      number;
  reading_max_streak:     number;
  reading_current_streak: number;
  percentage_correct:     number;
  hidden:                 boolean;
}
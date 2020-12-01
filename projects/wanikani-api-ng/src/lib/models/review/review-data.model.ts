import { WaniSubjectType } from '../../enums/wani-subject-type.enum';

export class ReviewData {
  created_at:                 Date;
  assignment_id:              number;
  subject_id:                 WaniSubjectType;
  spaced_repetition_system_id: number;
  starting_srs_stage:         number;
  ending_srs_stage:           number;
  incorrect_meaning_answers:  number;
  incorrect_reading_answers:  number;
}
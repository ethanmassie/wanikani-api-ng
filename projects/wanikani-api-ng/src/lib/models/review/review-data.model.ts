import { WaniSubjectType } from '../../enums/subject-type.enum';
import { SrsStageType } from '../../enums/srs-stage-type.enum';
import { SrsStageName } from '../../enums/srs-stage-name.enum';

export class ReviewData {
  created_at:                 Date;
  assignment_id:              number;
  subject_id:                 WaniSubjectType;
  starting_srs_stage:         SrsStageType;
  starting_srs_stage_name:    SrsStageName;
  ending_srs_stage:           SrsStageType;
  ending_srs_stage_name:      SrsStageName;
  incorrect_meaning_answers:  number;
  incorrect_reading_answers:  number;
}
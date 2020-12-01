import { WaniSubjectType } from '../../enums/wani-subject-type.enum';

export interface AssignmentData {
  created_at:     Date;
  subject_id:     number;
  subject_type:   WaniSubjectType;
  level?:         number;
  srs_stage:      number;
  unlocked_at:    Date;
  started_at:     Date;
  passed_at:      Date;
  burned_at:      Date;
  available_at:   Date;
  passed:         boolean;
  resurrected_at: Date;
  hidden:         boolean;
}
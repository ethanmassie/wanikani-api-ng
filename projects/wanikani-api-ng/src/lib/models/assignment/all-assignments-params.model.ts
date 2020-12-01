import { WaniSubjectType } from '../../enums/wani-subject-type.enum';

export interface AllAssignmentsParams {
  available_after?: Date;
  available_before?: Date;
  burned?: boolean;
  hidden?: boolean;
  ids?: number[];
  immediately_available_for_lessons?: any;
  immediately_available_for_review?: any;
  in_review?: any;
  levels?: number[];
  passed?: boolean;
  srs_stages?: number[];
  started?: boolean;
  subject_ids?: number[];
  subject_types?: WaniSubjectType[];
  unlocked?: boolean;
  updated_after?: Date;
}

import { WaniSubjectType } from '../../enums/wani-subject-type.enum';

export interface AllStudyMaterialsParams {
  hidden?: boolean;
  ids?: number[];
  subject_ids?: number[];
  subject_types?: WaniSubjectType[];
  updatedAfter?: Date;
}

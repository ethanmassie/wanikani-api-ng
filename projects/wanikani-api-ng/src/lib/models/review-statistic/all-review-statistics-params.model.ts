import { WaniSubjectType } from "../../enums/wani-subject-type.enum";

export interface AllReviewStatisticsParams {
  hidden?:                    boolean;
  ids?:                       number[];
  percentages_greater_than?:  number;
  percentages_less_than?:     number;
  subject_ids?:               number[];
  subject_types?:             WaniSubjectType[];
  updated_after?:             Date;
}
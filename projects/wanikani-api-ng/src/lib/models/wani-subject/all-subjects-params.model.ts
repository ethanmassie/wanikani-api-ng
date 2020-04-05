import { WaniSubjectType } from "../../enums/wani-subject-type.enum";

export class AllSubjectsParams {
  ids?:           number[];
  types?:         WaniSubjectType[];
  slugs?:         string[];
  levels?:        number[];
  hidden?:        boolean;
  updated_after?: Date;
}
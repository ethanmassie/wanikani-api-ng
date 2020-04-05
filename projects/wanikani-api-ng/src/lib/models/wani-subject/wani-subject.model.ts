import { WaniSubjectData } from './wani-subject-data.model';
import { WaniSubjectType } from '../../enums/wani-subject-type.enum';

export interface WaniSubject {
  id:               number;
  object:           WaniSubjectType;
  url:              string;
  data_updated_at:  Date;
  data:             WaniSubjectData;
}
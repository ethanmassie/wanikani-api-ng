import { SubjectData } from './subject-data.model';
import { SubjectType } from '../../enums/subject-type.enum';

export interface Subject {
    id:                 number;
    object:             SubjectType;
    url:                string;
    data_updated_at:    Date;
    data:               SubjectData;
}
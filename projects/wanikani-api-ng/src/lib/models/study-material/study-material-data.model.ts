import { SubjectType } from '../../enums/subject-type.enum';

export interface StudyMaterialData {
  created_at?:      Date;
  subject_id:       number;
  subject_type?:    SubjectType;
  meaning_note:     string;
  reading_note:     string;
  meaning_synonyms: string[];
}
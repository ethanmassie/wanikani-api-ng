import { KanjiReading } from '../reading/kanji-reading.model';
import { SubjectData } from './subject-data.model';

export interface KanjiSubjectData extends SubjectData{
  amalgamation_subject_ids:     number[];
  component_subject_ids:        number[];
  readings:                     KanjiReading[];
  visually_similar_subject_ids: number[];
}
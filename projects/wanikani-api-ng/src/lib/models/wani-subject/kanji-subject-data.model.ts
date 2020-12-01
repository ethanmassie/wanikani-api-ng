import { KanjiReading } from '../reading/kanji-reading.model';
import { WaniSubjectData } from './wani-subject-data.model';

export interface KanjiSubjectData extends WaniSubjectData {
  amalgamation_subject_ids: number[];
  component_subject_ids: number[];
  readings: KanjiReading[];
  visually_similar_subject_ids: number[];
}

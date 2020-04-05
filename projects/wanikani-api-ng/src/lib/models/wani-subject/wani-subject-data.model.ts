import { Meaning } from '../meaning/meaning.model';
import { AuxiliaryMeaning } from '../meaning/auxiliary-meaning.model';

export interface WaniSubjectData {
  auxiliary:  AuxiliaryMeaning;
  characters?:  string;
  created_at:  Date;
  document_url:    string;
  hidden_at:   Date;
  lesson_position: number;
  level:   number;
  meaning_hint?:      string;
  meanings:    Meaning[];
  meaning_mnemonic?:  string;
  reading_hint?:      string;
  reading_mnemonic?:  string;
  slug: string
}
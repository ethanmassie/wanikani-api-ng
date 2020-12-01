import { WaniSubjectData } from './wani-subject-data.model';
import { ContextSentence } from './context-sentence.model';
import { PronunciationAudio } from '../pronunciation-audio/pronunciation-audio.model';
import { Reading } from '../reading/reading.model';

export interface VocabularySubjectData extends WaniSubjectData {
  component_subject_ids: number[];
  context_sentences: ContextSentence;
  parts_of_speech: string[];
  pronunciation_audios: PronunciationAudio[];
  readings: Reading[];
}

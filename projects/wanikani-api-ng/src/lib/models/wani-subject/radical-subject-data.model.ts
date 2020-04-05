import { WaniSubjectData } from './wani-subject-data.model';
import { CharacterImage } from './character-image.model';

export interface RadicalSubjectData extends WaniSubjectData{
  amalgamation_subject_ids:   number[];
  character_images:           CharacterImage[];      
}
import { SubjectData } from './subject-data.model';
import { CharacterImage } from './character-image.model';

export interface RadicalSubjectData extends SubjectData{
    amalgamation_subject_ids:   number[];
    character_images:           CharacterImage[];      

}
import { Gender } from '../../enums/gender.enum'

export interface VoiceActorData {
  created_at:     Date;
  name:           string;
  gender:         Gender;
  description:    string;
}
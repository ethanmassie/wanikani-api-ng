import { Gender } from '../../enums/gender.enum'

export interface VoiceActor {
  id:               number;
  object:           'voice_actor';
  url:              string;
  data_updated_at:  Date;
  data: {
    created_at:     Date;
    name:           string;
    gender:         Gender;
    description:    string;
  }
}

import { VoiceActorData } from './voice-actor-data.model';

export interface VoiceActor {
  id:               number;
  object:           'voice_actor';
  url:              string;
  data_updated_at:  Date;
  data:             VoiceActorData;
}

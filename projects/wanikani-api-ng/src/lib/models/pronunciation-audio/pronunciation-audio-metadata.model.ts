import { Gender } from '../../enums/gender.enum';

export interface PronunciationAudioMetadata {
  gender: Gender;
  source_id: number;
  pronunciation: string;
  voice_actor_id: number;
  voice_actor_name: string;
  voice_description: string;
}

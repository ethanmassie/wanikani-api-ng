import { PronunciationAudioMetadata } from './pronunciation-audio-metadata.model';
import { AudioType } from '../../enums/audio-type.enum';

//will need to look at what API responses will actually look like
export interface PronunciationAudio {
  url: string;
  content_type: AudioType;
  metadata: PronunciationAudioMetadata;
}

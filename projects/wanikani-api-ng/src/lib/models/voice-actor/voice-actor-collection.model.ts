import { Pages } from '../pages.model';
import { VoiceActor } from './voice-actor.model';

export interface VoiceActorCollection {
  object:           'collection';
  url:              string;
  pages:            Pages;
  total_count:      number;
  data_updated_at:  Date;
  data:             VoiceActor[];
}
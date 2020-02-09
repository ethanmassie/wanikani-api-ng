import { PresentationOrder } from '../enums/presentation-order.enum';

export interface Preferences {
  default_voice_actor_id:         number;
  lessons_autoplay_audio:         boolean;
  lessons_batch_size:             number;
  lessons_presentation_order:     PresentationOrder;
  reviews_autoplay_audio:         boolean;
  reviews_display_srs_indicator:  boolean;
}
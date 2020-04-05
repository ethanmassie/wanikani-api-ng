import { KanjiReadingType } from '../../enums/kanji-reading-type.enum';
import { Reading } from './reading.model';

export interface KanjiReading extends Reading{
  type: KanjiReadingType;
}
import { IntervalUnit } from '../../enums/interval-unit.enum';

export interface SpacedRepetitionSystemStage {
  interval:       number;
  position:       string;
  interval_unit:  IntervalUnit;
}

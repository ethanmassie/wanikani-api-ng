import { SrsStageName } from '../../enums/srs-stage-name.enum';
import { SrsStageType } from '../../enums/srs-stage-type.enum';

export interface SrsStage {
  srs_stage:            SrsStageType;
  srs_stage_name:       SrsStageName;
  interval:             number;
  accelerated_interval: number;
}

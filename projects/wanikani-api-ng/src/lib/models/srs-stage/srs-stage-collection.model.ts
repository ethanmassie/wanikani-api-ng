import { SrsStage } from './srs-stage.model';

export interface SrsStageCollection {
  object:           'report';
  url:              string;
  data_updated_at:  Date;
  data:             SrsStage[];
}
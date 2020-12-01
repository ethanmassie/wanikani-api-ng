import { SpacedRepetitionSystemStage } from './spaced-repetition-system-stage.model';

export interface SpacedRepetitionSystemData {
  created_at: Date;
  name: string;
  description: string;
  unlocking_stage_position: number;
  starting_stage_position: number;
  passing_stage_position: number;
  burning_stage_position: number;
  stages: SpacedRepetitionSystemStage[];
}

import { AssignmentData } from './assignment-data.model';

export interface Assignment {
  id: number;
  object: 'assignment';
  url: string;
  data_updated_at: Date;
  data: AssignmentData;
}

import { Pages } from '../pages.model';
import { Assignment } from './assignment.model';

export interface AssignmentCollection {
  object: 'collection';
  url: string;
  pages: Pages;
  total_count: number;
  data_updated_at: Date;
  data: Assignment[];
}

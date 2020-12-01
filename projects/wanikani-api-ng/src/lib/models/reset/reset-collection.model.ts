import { Pages } from '../pages.model';
import { Reset } from './reset.model';

export interface ResetCollection {
  object: 'collection';
  url: string;
  pages: Pages;
  total_count: number;
  data_updated_at: Date;
  data: Reset[];
}

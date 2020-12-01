import { Pages } from '../pages.model';
import { StudyMaterial } from './study-material.model';

export interface StudyMaterialCollection {
  object: 'collection';
  url: string;
  pages: Pages;
  total_count: number;
  data_updated_at: Date;
  data: StudyMaterial[];
}

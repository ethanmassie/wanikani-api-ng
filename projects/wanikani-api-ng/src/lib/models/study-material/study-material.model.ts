import { StudyMaterialData } from './study-material-data.model';

export interface StudyMaterial {
  id: number;
  object: 'study_material';
  url: string;
  data_updated_at: Date;
  data: StudyMaterialData;
}

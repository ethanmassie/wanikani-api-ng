import { ResetData } from './reset-data.model';

export interface Reset {
  id:               number;
  object:           'reset';
  url:              string;
  data_updated_at:  Date;
  data:             ResetData;
}
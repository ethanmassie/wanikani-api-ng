import { UserData } from './user-data.model';

export interface User {
  object: 'user';
  url: string;
  data_updated_at: Date;
  data: UserData;
}

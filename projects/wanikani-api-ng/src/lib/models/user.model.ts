import { Subscription } from './subscription.model'
import { Preferences } from './preferences.model'

export interface User {
  object:                         'user';
  url:                            string;
  data_updated_at:                Date;
  data: {
    id:                           string;
    username:                     string;
    level:                        number;
    profile_url:                  string;
    started_at:                   Date;
    current_vacation_started_at:  Date;
    subscription:                 Subscription;
    preferences:                  Preferences;
  }
}

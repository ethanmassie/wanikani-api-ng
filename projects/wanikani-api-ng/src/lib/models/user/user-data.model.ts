import { WaniSubscription } from '../wani-subscription.model';
import { Preferences } from '../preferences.model';

export interface UserData {
  id: string;
  username: string;
  level: number;
  profile_url: string;
  started_at: Date;
  current_vacation_started_at: Date;
  subscription: WaniSubscription;
  preferences: Preferences;
}

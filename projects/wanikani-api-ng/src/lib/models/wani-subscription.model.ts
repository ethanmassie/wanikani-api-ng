import { WaniSubscriptionType } from '../enums/wani-subscription-type.enum';

export interface WaniSubscription {
  active: boolean;
  type: WaniSubscriptionType;
  max_level_granted: string;
  period_ends_at: Date;
}

import { SubscriptionType } from '../enums/subscription-type.enum';

export interface Subscription {
  active:             number;
  type:               SubscriptionType;
  max_level_granted:  string;
  period_ends_at:     Date;
}
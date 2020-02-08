export interface LevelProgressions {
  id:               number;
  object:           'level_progression';
  url:              string;
  date_updated_at:  Date;
  data: {
    created_at:   Date;
    level:        number;
    unlocked_at:  Date;
    started_at:   Date;
    passed_at:    Date;
    completed_at: Date;
    abandoned_at: Date;
  }
}
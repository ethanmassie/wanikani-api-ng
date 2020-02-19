export interface CreateReviewRequest {
  assignment_id:              number;
  incorrect_meaning_answers:  number;
  incorrect_reading_answers:  number;
  created_at:                 Date;
}
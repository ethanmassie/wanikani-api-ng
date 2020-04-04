export interface CreateReviewRequest {
  assignment_id?:             number;
  subject_id?:                number;
  incorrect_meaning_answers:  number;
  incorrect_reading_answers:  number;
  created_at?:                Date;
}

export function isValid(req: CreateReviewRequest): boolean {
  return !!req.assignment_id !== !!req.subject_id;
}
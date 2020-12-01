import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { getHeaders, postHeaders } from '../constants';
import { AllReviewsParams } from '../models/review/all-reviews-params.model';
import {
  CreateReviewRequest,
  isValid,
} from '../models/review/create-review-request.model';
import { CreateReviewResponse } from '../models/review/create-review-response.model';
import { ReviewCollection } from '../models/review/review-collection.model';
import { Review } from '../models/review/review.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/reviews';

@Injectable()
export class ReviewService {
  constructor(private http: HttpClient) {}

  /**
   * Get a collection of all reviews
   * @param pageUrl Optional next page from review response
   */
  public getAllReviews(
    params?: AllReviewsParams,
    pageUrl?: string
  ): Observable<ReviewCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<ReviewCollection>(url, { headers: getHeaders });
  }

  /**
   * Get a specific review by id
   * @param id Id of review
   */
  public getReview(id: number): Observable<Review> {
    return this.http.get<Review>(`${baseUrl}/${id}`, { headers: getHeaders });
  }

  /**
   * Create a new review
   * @param review CreateReviewRequest with assignment to create
   */
  public createReview(
    review: CreateReviewRequest
  ): Observable<CreateReviewResponse> {
    if (!isValid(review)) {
      return throwError(
        'CreateReviewRequest must have assignment_id or subject_id set but not both'
      );
    }

    return this.http.post<CreateReviewResponse>(
      `${baseUrl}`,
      { review },
      { headers: postHeaders }
    );
  }
}

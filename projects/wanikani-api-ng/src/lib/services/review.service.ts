import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ReviewCollection } from '../models/review/review-collection.model';
import { Review } from '../models/review/review.model';
import { CreateReviewRequest, isValid } from '../models/review/create-review-request.model';
import { CreateReviewResponse } from '../models/review/create-review-response.model';
import { appendQueryToUrl } from '../util/query-param';
import { AllReviewsParams } from '../models/review/all-reviews-params.model';
import { getHeaders, postHeaders } from '../constants';
import { publishReplay, refCount } from 'rxjs/operators';

const baseUrl = 'https://api.wanikani.com/v2/reviews';

@Injectable()
export class ReviewService {

  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all reviews
   * @param page Optional next page from review response
   */
  public getAllReviews(params?: AllReviewsParams, page?: string): Observable<ReviewCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    const key = `ALL_REVIEWS:${url}`;

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<ReviewCollection>(url, { headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific review by id
   * @param id Id of review
   */
  public getReview(id: number): Observable<Review> {
    const key = `REVIEW:${id}`;

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<Review>(`${baseUrl}/${id}`, { headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(key);
  }

  /**
   * Create a new review
   * @param request CreateReviewRequest with assignment to create
   */
  public createReview(request: CreateReviewRequest): Observable<CreateReviewResponse> {
    if(!isValid(request)) {
      return throwError('CreateReviewRequest must have assignment_id or subject_id set but not both');
    }

    return this.http.post<CreateReviewResponse>(`${baseUrl}`, {'review': request}, {headers: postHeaders});
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }
}

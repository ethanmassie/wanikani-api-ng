import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewStatisticCollection } from '../models/review-statistic/review-collection.model';
import { ReviewStatistic } from '../models/review-statistic/review-statistic.model';
import { AllReviewStatisticsParams } from '../models/review-statistic/all-review-statistics-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders } from '../constants';
import { take } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/review_statistics';

@Injectable()
export class ReviewStatisticService { 

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all review statistics
   * @param page Optional next page from review statistic response
   * @param params Optional query params
   */
  public getAllReviewStatistics(params?: AllReviewStatisticsParams, page?: string): Observable<ReviewStatisticCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    const key = `ALL_REVIEW_STATISTICS:${url}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<ReviewStatisticCollection>(`${url}`, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(stats => this.cache.set(key, stats));
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific review statistic by id
   * @param id Id of review statistic
   */
  public getReviewStatistic(id: number): Observable<ReviewStatistic> {
    const key = `REVIEW_STATISTIC:${id}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<ReviewStatistic>(`${baseUrl}/${id}`, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(stat => this.cache.set(key, stat));
    }

    return this.cache.get(key);
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }
}

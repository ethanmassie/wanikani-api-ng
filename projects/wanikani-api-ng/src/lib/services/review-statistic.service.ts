import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { AllReviewStatisticsParams } from '../models/review-statistic/all-review-statistics-params.model';
import { ReviewStatisticCollection } from '../models/review-statistic/review-statistic-collection.model';
import { ReviewStatistic } from '../models/review-statistic/review-statistic.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/review_statistics';

@Injectable()
export class ReviewStatisticService {
  constructor(private http: HttpClient) {}

  /**
   * Get a collection of all review statistics
   * @param pageUrl Optional page url from review statistic response
   * @param params Optional query params
   */
  public getAllReviewStatistics(
    params?: AllReviewStatisticsParams,
    pageUrl?: string
  ): Observable<ReviewStatisticCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<ReviewStatisticCollection>(`${url}`, {
      headers: getHeaders,
    });
  }

  /**
   * Get a specific review statistic by id
   * @param id Id of review statistic
   */
  public getReviewStatistic(id: number): Observable<ReviewStatistic> {
    return this.http.get<ReviewStatistic>(`${baseUrl}/${id}`, {
      headers: getHeaders,
    });
  }
}

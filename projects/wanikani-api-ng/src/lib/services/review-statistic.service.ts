import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewStatisticCollection } from '../models/review-statistic/review-collection.model';
import { ReviewStatistic } from '../models/review-statistic/review-statistic.model';
import { AllReviewStatisticsParams } from '../models/review-statistic/all-review-statistics-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders } from '../constants';

const baseUrl = 'https://api.wanikani.com/v2/review_statistics';

@Injectable()
export class ReviewStatisticService { 

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all review statistics
   * @param page Optional next page from review statistic response
   * @param params Optional query params
   */
  public getAllReviewStatistics(params?: AllReviewStatisticsParams, page?: string): Observable<ReviewStatisticCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    return this.http.get<ReviewStatisticCollection>(`${url}`, { headers: getHeaders });
  }

  /**
   * Get a specific review statistic by id
   * @param id Id of review statistic
   */
  public getReviewStatistic(id: number): Observable<ReviewStatistic> {
    return this.http.get<ReviewStatistic>(`${baseUrl}/${id}`, { headers: getHeaders });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewStatisticCollection } from '../models/review-statistic/review-collection.model';
import { ReviewStatistic } from '../models/review-statistic/review-statistic.model';

@Injectable()
export class ReviewStatisticsService {
  public baseUrl = 'https://api.wanikani.com/v2/review_statistics'
  public apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all review statistics
   * @param page Optional next page from review statistic response
   */
  public getAllReviewStatistics(page?: string): Observable<ReviewStatisticCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<ReviewStatisticCollection>(`${url}`, { headers: this.getHeaders });
  }

  /**
   * Get a specific review statistic by id
   * @param id Id of review statistic
   */
  public getReviewStatistic(id: number): Observable<ReviewStatistic> {
    return this.http.get<ReviewStatistic>(`${this.baseUrl}/${id}`, { headers: this.getHeaders });
  }

}

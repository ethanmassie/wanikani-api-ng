import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { AllResetsParams } from '../models/reset/all-resets-params.model';
import { ResetCollection } from '../models/reset/reset-collection.model';
import { Reset } from '../models/reset/reset.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/resets';

@Injectable()
export class ResetService {
  constructor(private http: HttpClient) {}

  /**
   * Return the collection of all resets
   * @param pageUrl Optional page for getting the next page from a paginated response
   * @param params Optional query params
   */
  public getAllResets(
    params?: AllResetsParams,
    pageUrl?: string
  ): Observable<ResetCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<ResetCollection>(url, { headers: getHeaders });
  }

  /**
   * Get a specific reset by id
   * @param id number identifier of reset to get
   */
  public getReset(id: number): Observable<Reset> {
    return this.http.get<Reset>(`${baseUrl}/${id}`, { headers: getHeaders });
  }
}

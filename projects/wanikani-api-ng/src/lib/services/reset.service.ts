import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResetCollection } from '../models/reset/reset-collection.model';
import { Observable } from 'rxjs';
import { Reset } from '../models/reset/reset.model';
import { AllResetsParams } from '../models/reset/all-resets-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders } from '../constants';
import { take } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/resets';

@Injectable()
export class ResetService {

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Return the collection of all resets
   * @param page Optional page for getting the next page from a paginated response
   * @param params Optional query params
   */
  public getAllResets(params?: AllResetsParams, page?: string): Observable<ResetCollection> {
    const url = !!page ? page: appendQueryToUrl(params, baseUrl);
    const key = `ALL_RESETS:${url}`

    if(!this.cache.isDefined(key)) {
      this.http.get<ResetCollection>(url, { headers: getHeaders}).pipe(
        take(1)
      ).subscribe(resets => this.cache.set(key, resets))
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific reset by id
   * @param id number identifier of reset to get
   */
  public getReset(id: number): Observable<Reset> {
    const key = `RESET:${id}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<Reset>(`${baseUrl}/${id}`, {headers: getHeaders}).pipe(
        take(1)
      ).subscribe(reset => this.cache.set(key, reset))
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

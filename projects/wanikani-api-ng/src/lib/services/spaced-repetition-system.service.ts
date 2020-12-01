import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { getHeaders } from '../constants';
import { BehaviorCache } from '../models/behavior-cache';
import { AllSpacedRepetitionSystemsParams } from '../models/spaced-repetition-system/all-spaced-repetition-systems-params.model';
import { SpacedRepetitionSystemCollection } from '../models/spaced-repetition-system/spaced-repetition-system-collection.model';
import { SpacedRepetitionSystem } from '../models/spaced-repetition-system/spaced-repetition-system.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/spaced_repetition_systems';

@Injectable()
export class SpacedRepetitionSystemService { 

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all Spaced Repetition Systems
   * Return the Spaced Repetition Systems collection as an observable
   */
  public getAllSpacedRepetitionSystems(params?: AllSpacedRepetitionSystemsParams, page?: string): Observable<SpacedRepetitionSystemCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    
    const key = `SPACED_REPETITION_SYSTEM:${url}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<SpacedRepetitionSystemCollection>(url, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(stages => this.cache.set(key, stages));
    }

    return this.cache.get(key);
  }

  /**
   * Get a Spaced Repetition System by ID
   * @param id Id of spaced repetition system
   */
  public getSpacedRepetitionSystem(id: number): Observable<SpacedRepetitionSystem>{
    const key = `SPACED_REPETITION_SYSTEM:${id}`;
    if(!this.cache.isDefined(key)) {
      this.http.get<SpacedRepetitionSystem>(`${baseUrl}/${id}`, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(srs => this.cache.set(key, srs));
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SrsStageCollection } from '../models/srs-stage/srs-stage-collection.model';
import { getHeaders } from '../constants';
import { publishReplay, refCount, take } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/srs_stages';

@Injectable()
export class SrsStageService { 

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all SRS Stages
   * Return the SRS Stage collection as an observable
   */
  public getSrsStages(): Observable<SrsStageCollection> {
    const key = 'SRS_STAGES';

    if(!this.cache.isDefined(key)) {
      this.http.get<SrsStageCollection>(baseUrl, { headers: getHeaders }).pipe(
        take(1)
      ).subscribe(stages => this.cache.set(key, stages));
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

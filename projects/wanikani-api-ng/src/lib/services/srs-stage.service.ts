import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SrsStageCollection } from '../models/srs-stage/srs-stage-collection.model';
import { getHeaders } from '../constants';
import { publishReplay, refCount } from 'rxjs/operators';

const baseUrl = 'https://api.wanikani.com/v2/srs_stages';

@Injectable()
export class SrsStageService { 

  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all SRS Stages
   * Return the SRS Stage collection as an observable
   */
  public getSrsStages(): Observable<SrsStageCollection> {
    const key = 'SRS_STAGES';

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<SrsStageCollection>(baseUrl, { headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
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

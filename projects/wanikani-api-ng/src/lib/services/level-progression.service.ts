import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LevelProgressionCollection } from '../models/level-progression/level-progression-collection.model';
import { Observable } from 'rxjs';
import { LevelProgression } from '../models/level-progression/level-progression.model';
import { AllLevelProgressionsParams } from '../models/level-progression/all-level-progressions-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders } from '../constants';
import { take } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/level_progressions';

@Injectable()
export class LevelProgressionService {

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }
  
  /**
   * 
   * Get a collection of all level progressions
   * @param page Optional page to get assignments from
   * Return the level progression collection as an observable
   */
  public getAllLevelProgressions(params?: AllLevelProgressionsParams, page?: string): Observable<LevelProgressionCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    const key = `ALL_LEVEL_PROGRESSIONS:${url}`

    if(!this.cache.isDefined(key)) {
      this.http.get<LevelProgressionCollection>(url, {headers: getHeaders}).pipe(
        take(1)
      ).subscribe(progression => this.cache.set(key, progression));
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific level progression by id
   * @param id id of level progression to retrieve
   * Return the level progression as an observable
   */
  public getLevelProgression(id: number): Observable<LevelProgression> {
    const key = `LEVEL_PROGRESSION:${id}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<LevelProgression>(`${baseUrl}/${id}`, {headers: getHeaders}).pipe(
        take(1)
      ).subscribe(progression => this.cache.set(key, progression));
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { AllLevelProgressionsParams } from '../models/level-progression/all-level-progressions-params.model';
import { LevelProgressionCollection } from '../models/level-progression/level-progression-collection.model';
import { LevelProgression } from '../models/level-progression/level-progression.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/level_progressions';

@Injectable()
export class LevelProgressionService {
  constructor(private http: HttpClient) {}

  /**
   *
   * Get a collection of all level progressions
   * @param pageUrl Optional url of specific page
   * Return the level progression collection as an observable
   */
  public getAllLevelProgressions(
    params?: AllLevelProgressionsParams,
    pageUrl?: string
  ): Observable<LevelProgressionCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<LevelProgressionCollection>(url, {
      headers: getHeaders,
    });
  }

  /**
   * Get a specific level progression by id
   * @param id id of level progression to retrieve
   * Return the level progression as an observable
   */
  public getLevelProgression(id: number): Observable<LevelProgression> {
    return this.http.get<LevelProgression>(`${baseUrl}/${id}`, {
      headers: getHeaders,
    });
  }
}

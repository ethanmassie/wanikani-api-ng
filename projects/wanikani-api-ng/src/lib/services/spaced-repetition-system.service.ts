import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { AllSpacedRepetitionSystemsParams } from '../models/spaced-repetition-system/all-spaced-repetition-systems-params.model';
import { SpacedRepetitionSystemCollection } from '../models/spaced-repetition-system/spaced-repetition-system-collection.model';
import { SpacedRepetitionSystem } from '../models/spaced-repetition-system/spaced-repetition-system.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/spaced_repetition_systems';

@Injectable()
export class SpacedRepetitionSystemService {
  constructor(private http: HttpClient) {}

  /**
   * Get a collection of all Spaced Repetition Systems
   * Return the Spaced Repetition Systems collection as an observable
   */
  public getAllSpacedRepetitionSystems(
    params?: AllSpacedRepetitionSystemsParams,
    pageUrl?: string
  ): Observable<SpacedRepetitionSystemCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<SpacedRepetitionSystemCollection>(url, {
      headers: getHeaders,
    });
  }

  /**
   * Get a Spaced Repetition System by ID
   * @param id Id of spaced repetition system
   */
  public getSpacedRepetitionSystem(
    id: number
  ): Observable<SpacedRepetitionSystem> {
    return this.http.get<SpacedRepetitionSystem>(`${baseUrl}/${id}`, {
      headers: getHeaders,
    });
  }
}

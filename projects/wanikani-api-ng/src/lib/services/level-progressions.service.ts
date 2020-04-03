import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LevelProgressionCollection } from '../models/level-progression/level-progression-collection.model';
import { Observable } from 'rxjs';
import { LevelProgression } from '../models/level-progression/level-progression.model';

@Injectable()
export class LevelProgressionsService {

  public baseUrl = 'https://api.wanikani.com/v2/level_progressions';
  public apiRevision = '20170710';

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  constructor(private http: HttpClient) { }
    /**
   * // TODO: Add other level progression specific query parameters (ids, updated_after)
   * Get a collection of all level progressions
   * @param page Optional page to get assignments from
   * Return the level progression collection as an observable
   */
  public getAllLevelProgressions(page?: string): Observable<LevelProgressionCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<LevelProgressionCollection>(`${url}`, {headers: this.getHeaders});
  }

  public getLevelProgressions(id: number): Observable<LevelProgression> {
    return this.http.get<LevelProgression>(`${this.baseUrl}/${id}`, {headers: this.getHeaders});
  }
}

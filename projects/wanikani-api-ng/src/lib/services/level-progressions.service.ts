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

  public getAllLevelProgressions(page?: string): Observable<LevelProgressionCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<LevelProgressionCollection>(`${url}`, {headers: this.getHeaders});
  }

  public getLevelProgressions(id: number): Observable<LevelProgression> {
    return this.http.get<LevelProgression>(`${this.baseUrl}/${id}`, {headers: this.getHeaders});
  }
}

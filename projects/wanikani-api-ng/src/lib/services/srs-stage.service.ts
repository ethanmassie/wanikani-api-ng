import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SrsStageCollection } from '../models/srs-stage/srs-stage-collection.model';
import { getHeaders } from '../constants';

const baseUrl = 'https://api.wanikani.com/v2/srs_stages';

@Injectable()
export class SrsStageService { 

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all SRS Stages
   * Return the SRS Stage collection as an observable
   */
  public getSrsStages(): Observable<SrsStageCollection> {
    return this.http.get<SrsStageCollection>(baseUrl,
      { headers: getHeaders }
    );
  }

}

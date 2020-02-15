import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SrsStageCollection } from '../models/srs-stage/srs-stage-collection.model';


@Injectable()
export class SrsStageService {

  public baseUrl = 'https://api.wanikani.com/v2/srs_stages'
  public apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all SRS Stages
   * Return the SRS Stage collection as an observable
   */
  public getSrsStages(page?: string): Observable<SrsStageCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<SrsStageCollection>(`${url}`,
      { headers: this.getHeaders }
    );
  }

}

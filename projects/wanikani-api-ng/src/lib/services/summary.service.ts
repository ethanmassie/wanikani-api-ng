import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../models/summary/summary.model';


@Injectable()
export class SummaryService {

  public baseUrl = 'https://api.wanikani.com/v2/summary'
  public apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  constructor(private http: HttpClient) { }

  /**
   * Get the user's summary report
   * Return the user's summary report
   */
  public getSummary(page?: string): Observable<Summary> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<Summary>(`${url}`,
      { headers: this.getHeaders }
    );
  }

}

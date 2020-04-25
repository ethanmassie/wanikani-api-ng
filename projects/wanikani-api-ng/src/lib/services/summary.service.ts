import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../models/summary/summary.model';
import { getHeaders } from '../constants';

const baseUrl = 'https://api.wanikani.com/v2/summary';

@Injectable()
export class SummaryService {

  constructor(private http: HttpClient) { }

  /**
   * Get the user's summary report
   * Return the user's summary report
   */
  public getSummary(): Observable<Summary> {
    return this.http.get<Summary>(baseUrl, { headers: getHeaders });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { Summary } from '../models/summary/summary.model';

const baseUrl = 'https://api.wanikani.com/v2/summary';

@Injectable()
export class SummaryService {
  constructor(private http: HttpClient) {}

  /**
   * Get the user's summary report
   * Return the user's summary report
   */
  public getSummary(): Observable<Summary> {
    return this.http.get<Summary>(baseUrl, { headers: getHeaders });
  }
}

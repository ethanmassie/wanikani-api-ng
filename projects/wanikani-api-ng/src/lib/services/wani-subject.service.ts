import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WaniSubjectCollection } from '../models/wani-subject/wani-subject-collection.model';
import { WaniSubject } from '../models/wani-subject/wani-subject.model';
import { appendQueryToUrl } from '../util/query-param';
import { AllSubjectsParams } from '../models/wani-subject/all-subjects-params.model';

@Injectable()
export class WaniSubjectService {

  public baseUrl = 'https://api.wanikani.com/v2/subjects'
  public apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  private putHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision,
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: HttpClient) { }
  
  /**
   * // TODO: Add other subject specific query parameters (ids, types, slugs, levels, hidden, updated_after)
   * Get a collection of all subjects
   * @param page Optional page to get subjects from
   * Return the subject collection as an observable
   */
  public getAllSubjects(params?: AllSubjectsParams, page?: string): Observable<WaniSubjectCollection> {
    const url = !!page ? page : appendQueryToUrl(params, this.baseUrl);
    return this.http.get<WaniSubjectCollection>(url,
      { headers: this.getHeaders }
    );
  }

  /**
   * Get a specific subject by id
   * @param id id of subject to retrieve
   * Return the subject as an observable
   */
  public getSubject(id: number): Observable<WaniSubject> {
    return this.http.get<WaniSubject>(`${this.baseUrl}/${id}`,
      { headers: this.getHeaders }
    );
  }

}

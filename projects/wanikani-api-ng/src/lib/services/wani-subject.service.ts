import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders } from '../constants';
import { AllSubjectsParams } from '../models/wani-subject/all-subjects-params.model';
import { WaniSubjectCollection } from '../models/wani-subject/wani-subject-collection.model';
import { WaniSubject } from '../models/wani-subject/wani-subject.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/subjects';

@Injectable()
export class WaniSubjectService {
  constructor(private http: HttpClient) {}

  /**
   * Get a collection of all subjects
   * @param pageUrl Optional page to get subjects from
   * Return the subject collection as an observable
   */
  public getAllSubjects(
    params?: AllSubjectsParams,
    pageUrl?: string
  ): Observable<WaniSubjectCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<WaniSubjectCollection>(url, { headers: getHeaders });
  }

  /**
   * Get a specific subject by id
   * @param id id of subject to retrieve
   * Return the subject as an observable
   */
  public getSubject(id: number): Observable<WaniSubject> {
    return this.http.get<WaniSubject>(`${baseUrl}/${id}`, {
      headers: getHeaders,
    });
  }
}

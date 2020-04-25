import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WaniSubjectCollection } from '../models/wani-subject/wani-subject-collection.model';
import { WaniSubject } from '../models/wani-subject/wani-subject.model';
import { appendQueryToUrl } from '../util/query-param';
import { AllSubjectsParams } from '../models/wani-subject/all-subjects-params.model';
import { getHeaders } from '../constants';
import { publishReplay, refCount } from 'rxjs/operators';

const baseUrl = 'https://api.wanikani.com/v2/subjects';

@Injectable()
export class WaniSubjectService {

  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) { }
  
  /**
   * Get a collection of all subjects
   * @param page Optional page to get subjects from
   * Return the subject collection as an observable
   */
  public getAllSubjects(params?: AllSubjectsParams, page?: string): Observable<WaniSubjectCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    const key = `ALL_SUBJECTS:${url}`;

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<WaniSubjectCollection>(url, { headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific subject by id
   * @param id id of subject to retrieve
   * Return the subject as an observable
   */
  public getSubject(id: number): Observable<WaniSubject> {
    const key = `SUBJECT:${id}`;

    if(!this.cache.has(key)) {
      this.cache.set(key, this.http.get<WaniSubject>(`${baseUrl}/${id}`, { headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(key);
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }
}

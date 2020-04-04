import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectCollection } from '../models/subject/subject-collection.model';
import { Subject } from '../models/subject/subject.model';

@Injectable()
export class SubjectService {

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
  public getAllSubjects(page?: string): Observable<SubjectCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<SubjectCollection>(`${url}`,
      { headers: this.getHeaders }
    );
  }

  /**
   * Get a specific subject by id
   * @param id id of subject to retrieve
   * Return the subject as an observable
   */
  public getSubject(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.baseUrl}/${id}`,
      { headers: this.getHeaders }
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignmentCollection } from '../models/assignment/assignment-collection.model';
import { Assignment } from '../models/assignment/assignment.model';
import { AllAssignmentsParams } from '../models/assignment/all-assignments-params.model';
import { appendQueryToUrl } from '../util/query-param';

@Injectable()
export class AssignmentsService {

  public baseUrl = 'https://api.wanikani.com/v2/assignments'
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
   * // TODO: Add other assignment specific query parameters (available_after, available_before, burned, hidden, ids, immediately_available_for_lessons, immediately_available_for_review, in_review, levels, passed, srs_stages, started, subject_ids, subejct_types, unlocked, updated_after)
   * Get a collection of all assignments
   * @param page Optional page to get assignments from
   * Return the assignment collection as an observable
   */
  public getAllAssignments(params?: AllAssignmentsParams, page?: string): Observable<AssignmentCollection> {
    const url = !!page ? page : appendQueryToUrl(params, this.baseUrl);
    return this.http.get<AssignmentCollection>(url,
      { headers: this.getHeaders }
    );
  }

  /**
   * Get a specific assignment by id
   * @param id id of assignment to retrieve
   * Return the assignment as an observable
   */
  public getAssignment(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.baseUrl}/${id}`,
      { headers: this.getHeaders }
    );
  }

  /**
   * Start a specific assignment by id
   * @param id 
   * Return the started assignment as an observable
   */
  public startAssignment(id: number, startedAt: Date = new Date()): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.baseUrl}/${id}/start`,
      { started_at: startedAt },
      { headers: this.putHeaders }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders, putHeaders } from '../constants';
import { AllAssignmentsParams } from '../models/assignment/all-assignments-params.model';
import { AssignmentCollection } from '../models/assignment/assignment-collection.model';
import { Assignment } from '../models/assignment/assignment.model';
import { appendQueryToUrl } from '../util/query-param';

const baseUrl = 'https://api.wanikani.com/v2/assignments';

@Injectable()
export class AssignmentService {
  constructor(private http: HttpClient) {}

  /**
   * Get a collection of all assignments
   * @param pageUrl Optional page to get assignments from
   * Return the assignment collection as an observable
   */
  public getAllAssignments(
    params?: AllAssignmentsParams,
    pageUrl?: string
  ): Observable<AssignmentCollection> {
    const url = !!pageUrl ? pageUrl : appendQueryToUrl(params, baseUrl);
    return this.http.get<AssignmentCollection>(url, { headers: getHeaders });
  }

  /**
   * Get a specific assignment by id
   * @param id id of assignment to retrieve
   * Return the assignment as an observable
   */
  public getAssignment(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${baseUrl}/${id}`, {
      headers: getHeaders,
    });
  }

  /**
   * Start a specific assignment by id
   * @param id
   * Return the started assignment as an observable
   */
  public startAssignment(
    id: number,
    req: { started_at?: Date } = {}
  ): Observable<Assignment> {
    return this.http.put<Assignment>(`${baseUrl}/${id}/start`, req, {
      headers: putHeaders,
    });
  }
}

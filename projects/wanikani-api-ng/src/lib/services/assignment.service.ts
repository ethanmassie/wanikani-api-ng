import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignmentCollection } from '../models/assignment/assignment-collection.model';
import { Assignment } from '../models/assignment/assignment.model';
import { AllAssignmentsParams } from '../models/assignment/all-assignments-params.model';
import { appendQueryToUrl } from '../util/query-param';
import { getHeaders, putHeaders } from '../constants';
import { publishReplay, refCount, take, tap } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/assignments';

@Injectable()
export class AssignmentService {

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all assignments
   * @param page Optional page to get assignments from
   * Return the assignment collection as an observable
   */
  public getAllAssignments(params?: AllAssignmentsParams, page?: string): Observable<AssignmentCollection> {
    const url = !!page ? page : appendQueryToUrl(params, baseUrl);
    const key = `ALL_ASSIGNMENTS:${url}`;

    if(!this.cache.isDefined(key)) {
      this.http.get<AssignmentCollection>(url, {headers: getHeaders}).pipe(
        take(1)
      ).subscribe(col => this.cache.set(key, col));
    }

    return this.cache.get(key);
  }

  /**
   * Get a specific assignment by id
   * @param id id of assignment to retrieve
   * Return the assignment as an observable
   */
  public getAssignment(id: number): Observable<Assignment> {
    const key = `ASSIGNMENT:${id}`;

    if(!this.cache.isDefined(key)) {
      this.cache.set(key, this.http.get<Assignment>(`${baseUrl}/${id}`,{ headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
      this.http.get<Assignment>(`${baseUrl}/${id}`,{ headers: getHeaders }).pipe(
          take(1)
        ).subscribe(assignment => this.cache.set(key, assignment));
    }

    return <Observable<Assignment>>this.cache.get(key);
  }

  /**
   * Start a specific assignment by id
   * @param id 
   * Return the started assignment as an observable
   */
  public startAssignment(id: number, req: {started_at?: Date} = {}): Observable<Assignment> {
    return this.http.put<Assignment>(`${baseUrl}/${id}/start`, req, { headers: putHeaders }).pipe(
      tap(assignment => {
        const key = `ASSIGNMENT:${id}`;
        this.cache.set(key, assignment);
      })
    );
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }

}

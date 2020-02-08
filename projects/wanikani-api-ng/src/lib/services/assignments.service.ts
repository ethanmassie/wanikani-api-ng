import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignmentCollection } from '../models/assignment/assignment-collection.model';
import { Assignment } from '../models/assignment/assignment.model';

@Injectable()
export class AssignmentsService {

  private baseUrl = 'https://api.wanikani.com/v2/assignments'
  private apiRevision = '20170710'

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  private putHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision,
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: HttpClient) { }

  /**
   * Get a collection of all assignments
   * @param page Optional page to get assignments from
   * Return the assignment collection as an observable
   */
  public getAllAssignments(page?: string): Observable<AssignmentCollection> {
    const url = !!page ? page : this.baseUrl;
    return this.http.get<AssignmentCollection>(`${url}`,
      { headers: this.getHeaders }
    );
  }

  /**
   * Get a specific assignment by id
   * @param assignmentId id of assignment to retrieve
   * Return the assignment as an observable
   */
  public getAssignment(assignmentId: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.baseUrl}/${assignmentId}`,
      { headers: this.getHeaders }
    );
  }

  /**
   * Start a specific assignment by id
   * @param assignmentId 
   * Return the started assignment as an observable
   */
  public startAssignment(assignmentId: number): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.baseUrl}/${assignmentId}/start`,
      null,
      { headers: this.putHeaders }
    );
  }

}

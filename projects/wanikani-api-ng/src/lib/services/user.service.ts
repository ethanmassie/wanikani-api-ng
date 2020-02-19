import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { Preferences } from '../models/preferences.model';

@Injectable()
export class UserService {

  public baseUrl = 'https://api.wanikani.com/v2/user';
  public apiRevision = '20170710';

  private getHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision
  });

  private putHeaders = new HttpHeaders({
    'Wanikani-Revision': this.apiRevision,
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: HttpClient) { }

  /**
   * Get the user information
   * Return the user as an observable
   */
  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}`,
      { headers: this.getHeaders }
    );
  }

  /**
   * Update the users preferences
   * Return the updated user as an observable
   */
  public updateUser(preferences: Preferences): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}`, 
      {
        "user" : {
          "preferences" : preferences
        }
      }, 
      { headers: this.putHeaders }
    );
  }




}

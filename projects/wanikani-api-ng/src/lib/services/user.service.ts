import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { Preferences } from '../models/preferences.model';
import { getHeaders, putHeaders } from '../constants';

const baseUrl = 'https://api.wanikani.com/v2/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Get the user information
   * Return the user as an observable
   */
  public getUser(): Observable<User> {
    return this.http.get<User>(baseUrl,
      { headers: getHeaders }
    );
  }

  /**
   * Update the users preferences
   * Return the updated user as an observable
   */
  public updateUser(preferences: Preferences): Observable<User> {
    return this.http.put<User>(baseUrl, 
      {
        "user" : {
          "preferences" : preferences
        }
      }, 
      { headers: putHeaders }
    );
  }




}

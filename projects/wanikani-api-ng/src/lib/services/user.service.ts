import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getHeaders, putHeaders } from '../constants';
import { Preferences } from '../models/preferences.model';
import { User } from '../models/user/user.model';

const baseUrl = 'https://api.wanikani.com/v2/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * Get the user information
   * Return the user as an observable
   */
  public getUser(): Observable<User> {
    return this.http.get<User>(baseUrl, { headers: getHeaders });
  }

  /**
   * Update the users preferences. The cache where the user is stored is also updated here.
   * If an error occurs in the update you may want to clear the cache
   * Return the updated user as an observable
   */
  public updateUser(preferences: Preferences): Observable<User> {
    const req = {
      user: {
        preferences,
      },
    };

    return this.http.put<User>(baseUrl, req, { headers: putHeaders });
  }
}

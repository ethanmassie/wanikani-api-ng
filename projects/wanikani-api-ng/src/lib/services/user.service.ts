import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { Preferences } from '../models/preferences.model';
import { getHeaders, putHeaders } from '../constants';
import { publishReplay, refCount } from 'rxjs/operators';

const baseUrl = 'https://api.wanikani.com/v2/user';
const userKey = 'USER';

@Injectable()
export class UserService {

  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) { }

  /**
   * Get the user information
   * Return the user as an observable
   */
  public getUser(): Observable<User> {

    if(!this.cache.has(userKey)) {
      this.cache.set(userKey, this.http.get<User>(baseUrl, { headers: getHeaders }).pipe(
          publishReplay(1),
          refCount()
        )
      );
    }

    return this.cache.get(userKey);
  }

  /**
   * Update the users preferences. The cache where the user is stored is also updated here. If an error occurs in the update you may want to clear the cache
   * Return the updated user as an observable
   */
  public updateUser(preferences: Preferences): Observable<User> {
    const req = {
      "user" : {
        "preferences" : preferences
      }
    }

    this.cache.set(userKey, this.http.put<User>(baseUrl, req, { headers: putHeaders }).pipe(
        publishReplay(1),
        refCount()
      )
    );

    return this.cache.get(userKey);
  }

  /**
   * Clear all cached observables
   */
  public clearCache() {
    this.cache.clear();
  }
}

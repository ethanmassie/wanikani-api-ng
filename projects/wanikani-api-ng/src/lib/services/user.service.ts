import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { Preferences } from '../models/preferences.model';
import { getHeaders, putHeaders } from '../constants';
import { publishReplay, refCount, take, tap } from 'rxjs/operators';
import { BehaviorCache } from '../models/behavior-cache';

const baseUrl = 'https://api.wanikani.com/v2/user';
const userKey = 'USER';

@Injectable()
export class UserService {

  private cache = new BehaviorCache();

  constructor(private http: HttpClient) { }

  /**
   * Get the user information
   * Return the user as an observable
   */
  public getUser(): Observable<User> {

    if(!this.cache.isDefined(userKey)) {
      this.http.get<User>(baseUrl, { headers: getHeaders }).pipe(
        take(1),
      ).subscribe(user => this.cache.set(userKey, user));
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

    return this.http.put<User>(baseUrl, req, { headers: putHeaders }).pipe(
              tap(user => {
                this.cache.set(userKey, user);
              })
            );
  }

  /**
   * Nullify the value in cached behavior subjects
   */
  public clearCache() {
    this.cache.clear();
  }
}

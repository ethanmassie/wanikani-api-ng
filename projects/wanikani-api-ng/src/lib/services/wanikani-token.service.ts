import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

// Key to the api token in local storage
const tokenKey = 'burnt_tofu_token';

@Injectable()
export class WanikaniTokenService { 

  private isAuthenticated: BehaviorSubject<boolean>;

  constructor() { 
    this.isAuthenticated = new BehaviorSubject(this.hasToken());
  }

  /**
   * Helper method which retrieves the token from local storage
   */
  private getToken(): string  {
    return localStorage.getItem(tokenKey);
  }

  /**
   * Add the users api token, if it exists, to the request headers
   * @param req HttpRequest to add auth header to
   */
  public addAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
    if(this.hasToken()) {
      let authHeaders = req.headers.append('Authorization', `Bearer ${this.getToken()}`);
      return req.clone({headers: authHeaders});
    }
    return req;
  }

  /**
   * Store the api token in local storage and set the user to authenticated
   * @param apiToken 
   */
  public setApiToken(apiToken: string) {
    localStorage.setItem(tokenKey, apiToken);
    this.isAuthenticated.next(true); // assume they are authenticated just based on providing a token
  }

  /**
   * Check if a token exists in local storage
   */
  public hasToken(): boolean {
    return !!localStorage.getItem(tokenKey);
  }

  /**
   * Removes the token from local storage and sets isAuthenticated to false
   */
  public logout() {
    localStorage.removeItem(tokenKey);
    this.isAuthenticated.next(false);
  }

  /**
   * Return is authenticated as an observable
   */
  public getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}

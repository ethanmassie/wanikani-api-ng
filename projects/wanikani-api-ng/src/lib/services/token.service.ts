import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

// Key to the api token in local storage
const tokenKey = 'burnt_tofu_token';

@Injectable()
export class TokenService { 

  constructor() { }

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
   * Store the api token in local storage
   * @param apiToken 
   */
  public setApiToken(apiToken: string) {
    localStorage.setItem(tokenKey, apiToken);
  }

  /**
   * Check if a token exists in local storage
   */
  public hasToken(): boolean {
    return !!localStorage.getItem(tokenKey);
  }

  /**
   * Removes the token from local storage
   */
  public clearToken() {
    localStorage.removeItem(tokenKey);
  }
}

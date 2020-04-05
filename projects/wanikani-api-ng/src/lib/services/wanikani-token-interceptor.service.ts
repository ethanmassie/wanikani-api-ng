import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { WanikaniTokenService } from './wanikani-token.service';

@Injectable()
export class WanikaniTokenInterceptorService implements HttpInterceptor {

  constructor(private tokenService: WanikaniTokenService) { }

  /**
   * Attempt to apply auth headers before fulfilling a request
   * @param req 
   * @param next 
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.tokenService.addAuthHeader(req);
    return next.handle(req);
  }
}

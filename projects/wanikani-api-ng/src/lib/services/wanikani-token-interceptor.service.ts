import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg = <string>error.error.error;
        if(errorMsg.toLowerCase().includes('unauthorized')) {
          this.tokenService.badTokenUsed.next();
          this.tokenService.logout();
        }
        return throwError(error);
      })
    );
  }
}

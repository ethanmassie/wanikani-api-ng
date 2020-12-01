import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WanikaniTokenService } from './wanikani-token.service';

@Injectable()
export class WanikaniTokenInterceptorService implements HttpInterceptor {
  constructor(private tokenService: WanikaniTokenService) {}

  /**
   * Attempt to apply auth headers before fulfilling a request
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this.tokenService.addAuthHeader(req);
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg = error.error.error as string;
        // a dumb hack for determining the actual error
        if (errorMsg.toLowerCase().includes('unauthorized')) {
          this.tokenService.badTokenUsed.next();
          this.tokenService.logout();
        }
        return throwError(error);
      })
    );
  }
}

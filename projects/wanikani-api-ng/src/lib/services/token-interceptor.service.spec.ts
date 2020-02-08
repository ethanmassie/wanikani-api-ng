import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('TokenInterceptorService', () => {
  let tokenInterceptorService: TokenInterceptorService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }
    ]
  }));


});

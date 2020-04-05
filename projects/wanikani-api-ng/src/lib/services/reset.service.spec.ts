import { TestBed } from '@angular/core/testing';

import { ResetService } from './reset.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('ResetService', () => {
  let resetsService: ResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        },
        ResetService
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    resetsService = TestBed.get(ResetService);  });

  it('should be created', () => {
    expect(resetsService).toBeTruthy();
  });
});

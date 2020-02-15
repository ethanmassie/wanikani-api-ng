import { TestBed } from '@angular/core/testing';

import { ResetsService } from './resets.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('ResetsService', () => {
  let resetsService: ResetsService;

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
        ResetsService
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    resetsService = TestBed.get(ResetsService);  });

  it('should be created', () => {
    expect(resetsService).toBeTruthy();
  });
});

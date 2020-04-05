import { TestBed } from '@angular/core/testing';

import { ResetService } from './reset.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from '../../public-api';

describe('ResetService', () => {
  let resetsService: ResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WanikaniTokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: WanikaniTokenInterceptorService,
          multi: true
        },
        ResetService
      ]
    });
    const tokenService = TestBed.get(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    resetsService = TestBed.get(ResetService);  });

  it('should be created', () => {
    expect(resetsService).toBeTruthy();
  });
});

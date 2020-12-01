import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WanikaniTokenInterceptorService } from '../../public-api';
import { ResetService } from './reset.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('ResetService', () => {
  let resetsService: ResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WanikaniTokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: WanikaniTokenInterceptorService,
          multi: true,
        },
        ResetService,
      ],
    });
    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    resetsService = TestBed.inject(ResetService);
  });

  it('should be created', () => {
    expect(resetsService).toBeTruthy();
  });
});

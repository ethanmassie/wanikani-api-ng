import { TestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';

describe('SummaryService', () => {
  let summaryService: SummaryService;

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          WanikaniTokenService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: WanikaniTokenInterceptorService,
            multi: true
          },
          SummaryService
        ]
      });

      const tokenService = TestBed.get(WanikaniTokenService);
      tokenService.setApiToken('mock token');
      
      summaryService = TestBed.get(SummaryService);
    }
  );

  it('should be created', () => {
    expect(summaryService).toBeTruthy();
  });
});

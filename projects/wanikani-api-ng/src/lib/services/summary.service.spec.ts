import { TestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenInterceptorService } from './token-interceptor.service';

describe('SummaryService', () => {
  let summaryService: SummaryService;

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          TokenService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
          },
          SummaryService
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');
      
      summaryService = TestBed.get(SummaryService);
    }
  );

  it('should be created', () => {
    expect(summaryService).toBeTruthy();
  });
});

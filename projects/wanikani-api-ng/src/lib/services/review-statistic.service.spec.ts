import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WanikaniTokenInterceptorService } from '../../public-api';
import { ReviewStatisticService } from './review-statistic.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('ReviewStatisticService', () => {
  let reviewStatisticsService: ReviewStatisticService;

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
        ReviewStatisticService,
      ],
    });
    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    reviewStatisticsService = TestBed.inject(ReviewStatisticService);
  });

  it('should be created', () => {
    expect(reviewStatisticsService).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReviewStatisticService } from './review-statistic.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from '../../public-api';

describe('ReviewStatisticService', () => {
  let reviewStatisticsService: ReviewStatisticService;

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
        ReviewStatisticService,
      ]
    });
    const tokenService = TestBed.get(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    reviewStatisticsService = TestBed.inject(ReviewStatisticService);
  });

  it('should be created', () => {
    expect(reviewStatisticsService).toBeTruthy();
  });
});

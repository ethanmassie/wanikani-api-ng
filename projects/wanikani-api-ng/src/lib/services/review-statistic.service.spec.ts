import { TestBed } from '@angular/core/testing';

import { ReviewStatisticService } from './review-statistic.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('ReviewStatisticService', () => {
  let reviewStatisticsService: ReviewStatisticService;

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
        ReviewStatisticService,
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    reviewStatisticsService = TestBed.inject(ReviewStatisticService);
  });

  it('should be created', () => {
    expect(reviewStatisticsService).toBeTruthy();
  });
});

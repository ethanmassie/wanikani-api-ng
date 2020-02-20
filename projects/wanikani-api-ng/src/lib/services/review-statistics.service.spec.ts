import { TestBed } from '@angular/core/testing';

import { ReviewStatisticsService } from './review-statistics.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('ReviewStatisticsService', () => {
  let reviewStatisticsService: ReviewStatisticsService;

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
        ReviewStatisticsService,
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    reviewStatisticsService = TestBed.inject(ReviewStatisticsService);
  });

  it('should be created', () => {
    expect(reviewStatisticsService).toBeTruthy();
  });
});

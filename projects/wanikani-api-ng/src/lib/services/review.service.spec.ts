import { TestBed } from '@angular/core/testing';

import { ReviewService } from './review.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from '../../public-api';

describe('ReviewService', () => {
  let reviewsService: ReviewService;

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
        ReviewService,
      ]
    });
    const tokenService = TestBed.get(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    reviewsService = TestBed.inject(ReviewService);
  });

  it('should be created', () => {
    expect(reviewsService).toBeTruthy();
  });
});

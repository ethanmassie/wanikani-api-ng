import { TestBed } from '@angular/core/testing';

import { ReviewsService } from './reviews.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('ReviewsService', () => {
  let reviewsService: ReviewsService;

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
        ReviewsService,
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    reviewsService = TestBed.inject(ReviewsService);
  });

  it('should be created', () => {
    expect(reviewsService).toBeTruthy();
  });
});

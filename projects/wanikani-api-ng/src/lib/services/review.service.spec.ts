import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WanikaniTokenInterceptorService } from '../../public-api';
import { ReviewService } from './review.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('ReviewService', () => {
  let reviewsService: ReviewService;

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
        ReviewService,
      ],
    });
    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    reviewsService = TestBed.inject(ReviewService);
  });

  it('should be created', () => {
    expect(reviewsService).toBeTruthy();
  });
});

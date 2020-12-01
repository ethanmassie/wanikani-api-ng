import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WaniSubjectService } from './wani-subject.service';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('WaniSubjectService', () => {
  let subjectService: WaniSubjectService;

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
        WaniSubjectService,
      ],
    });

    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    subjectService = TestBed.inject(WaniSubjectService);
  });

  it('should be created', () => {
    expect(subjectService).toBeTruthy();
  });
});

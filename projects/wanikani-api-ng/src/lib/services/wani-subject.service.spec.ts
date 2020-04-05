import { TestBed } from '@angular/core/testing';

import { WaniSubjectService } from './wani-subject.service';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WaniSubjectService', () => {
  let subjectService: WaniSubjectService;

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
          WaniSubjectService
        
        ]
      });

      const tokenService = TestBed.get(WanikaniTokenService);
      tokenService.setApiToken('mock token');

      subjectService = TestBed.get(WaniSubjectService
      );
    }
  );

  it('should be created', () => {
    expect(subjectService).toBeTruthy();
  });
});

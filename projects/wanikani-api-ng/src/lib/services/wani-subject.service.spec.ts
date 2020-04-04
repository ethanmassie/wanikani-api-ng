import { TestBed } from '@angular/core/testing';

import { WaniSubjectService } from './wani-subject.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
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
          TokenService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
          },
          WaniSubjectService
        
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');

      subjectService = TestBed.get(WaniSubjectService
      );
    }
  );

  it('should be created', () => {
    expect(subjectService).toBeTruthy();
  });
});

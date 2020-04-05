import { TestBed } from '@angular/core/testing';

import { AssignmentService } from './assignment.service';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AssignmentService', () => {
  let assignmentService: AssignmentService;

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
          AssignmentService
        ]
      });

      const tokenService = TestBed.get(WanikaniTokenService);
      tokenService.setApiToken('mock token');

      assignmentService = TestBed.get(AssignmentService);
    }
  );

  it('should be created', () => {
    expect(assignmentService).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AssignmentsService } from './assignments.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AssignmentsService', () => {
  let assignmentService: AssignmentsService;

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
          AssignmentsService
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');

      assignmentService = TestBed.get(AssignmentsService);
    }
  );

  it('should be created', () => {
    expect(assignmentService).toBeTruthy();
  });
});

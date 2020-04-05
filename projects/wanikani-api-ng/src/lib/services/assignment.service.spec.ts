import { TestBed } from '@angular/core/testing';

import { AssignmentService } from './assignment.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
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
          TokenService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
          },
          AssignmentService
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');

      assignmentService = TestBed.get(AssignmentService);
    }
  );

  it('should be created', () => {
    expect(assignmentService).toBeTruthy();
  });
});

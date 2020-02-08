import { TestBed } from '@angular/core/testing';

import { AssignmentsService } from './assignments.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';

describe('AssignmentsService', () => {
  let assignmentService: AssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
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
  });

  it('should be created', () => {
    assignmentService = TestBed.get(AssignmentsService);
    expect(assignmentService).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { TokenInterceptorService } from './token-interceptor.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssignmentService } from './assignment.service';

describe('TokenInterceptorService', () => {
  let tokenService: TokenService;
  let assignmentsService: AssignmentService;
  let httpMock: HttpTestingController;

  beforeEach(
    () => {
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
        AssignmentService
      ]
      });

      tokenService = TestBed.get(TokenService);
      assignmentsService = TestBed.get(AssignmentService);
      httpMock = TestBed.get(HttpTestingController);

      tokenService.setApiToken('mock token');
    }
  );

  it('should add Authorization header', 
    () => {
      assignmentsService.getAllAssignments()
        .subscribe(
          (response) => {
            expect(response).toBeTruthy();
          }
        );

      const httpRequest = httpMock.expectOne('https://api.wanikani.com/v2/assignments');
      expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    }
  );

});

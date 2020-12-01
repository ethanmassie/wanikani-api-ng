import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AssignmentService } from './assignment.service';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('WanikaniTokenInterceptorService', () => {
  let tokenService: WanikaniTokenService;
  let assignmentsService: AssignmentService;
  let httpMock: HttpTestingController;

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
        AssignmentService,
      ],
    });

    tokenService = TestBed.inject(WanikaniTokenService);
    assignmentsService = TestBed.inject(AssignmentService);
    httpMock = TestBed.inject(HttpTestingController);

    tokenService.setApiToken('mock token');
  });

  it('should add Authorization header', () => {
    assignmentsService.getAllAssignments().subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(
      'https://api.wanikani.com/v2/assignments'
    );
    expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
  });
});

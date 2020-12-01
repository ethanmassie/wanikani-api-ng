import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('UserService', () => {
  let userService: UserService;

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
        UserService,
      ],
    });

    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });
});

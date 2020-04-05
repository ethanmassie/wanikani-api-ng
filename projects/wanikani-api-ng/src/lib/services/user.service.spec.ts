import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';

describe('UserService', () => {
  let userService: UserService;

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
          UserService
        ]
      });

      const tokenService = TestBed.get(WanikaniTokenService);
      tokenService.setApiToken('mock token');
      
      userService = TestBed.get(UserService);
    }
  );

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });
});

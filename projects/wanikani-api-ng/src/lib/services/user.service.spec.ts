import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenInterceptorService } from './token-interceptor.service';

describe('UserService', () => {
  let userService: UserService;

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
          UserService
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');
      
      userService = TestBed.get(UserService);
    }
  );

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });
});

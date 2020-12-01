import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { WanikaniTokenService } from './wanikani-token.service';

describe('WanikaniTokenService', () => {
  let tokenService: WanikaniTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WanikaniTokenService],
    });
    tokenService = TestBed.inject(WanikaniTokenService);
  });

  it('should be created', () => {
    expect(tokenService).toBeTruthy();
  });

  it('should be unauthenticated without a token available', () => {
    tokenService.logout(); // logout in case there is already a token stored
    tokenService
      .getIsAuthenticated()
      .pipe(take(1))
      .subscribe((authenticated) => expect(authenticated).toBeFalsy());
  });

  it('should be authenticated when token is added', () => {
    tokenService.setApiToken('any-token');
    tokenService
      .getIsAuthenticated()
      .pipe(take(1))
      .subscribe((authenticated) => expect(authenticated).toBeTruthy());
  });
});

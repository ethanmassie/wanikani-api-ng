import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { WanikaniTokenService } from '../services/wanikani-token.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, WanikaniTokenService],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

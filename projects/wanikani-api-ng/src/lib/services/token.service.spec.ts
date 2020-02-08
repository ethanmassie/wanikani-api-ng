import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let tokenService: TokenService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [TokenService]
  }));

  it('should be created', () => {
    tokenService = TestBed.get(TokenService);
    expect(tokenService).toBeTruthy();
  });
});

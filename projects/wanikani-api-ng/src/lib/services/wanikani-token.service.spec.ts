import { TestBed } from '@angular/core/testing';

import { WanikaniTokenService } from './wanikani-token.service';

describe('WanikaniTokenService', () => {
  let tokenService: WanikaniTokenService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [WanikaniTokenService]
  }));

  it('should be created', () => {
    tokenService = TestBed.get(WanikaniTokenService);
    expect(tokenService).toBeTruthy();
  });
});

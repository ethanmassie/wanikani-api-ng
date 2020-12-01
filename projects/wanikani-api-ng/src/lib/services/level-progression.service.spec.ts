import { TestBed } from '@angular/core/testing';

import { LevelProgressionService } from './level-progression.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from '../../public-api';

describe('LevelProgressionService', () => {
  let levelProgressionsService: LevelProgressionService;

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
        LevelProgressionService,
      ],
    });

    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    levelProgressionsService = TestBed.inject(LevelProgressionService);
  });

  it('should be created', () => {
    expect(levelProgressionsService).toBeTruthy();
  });
});

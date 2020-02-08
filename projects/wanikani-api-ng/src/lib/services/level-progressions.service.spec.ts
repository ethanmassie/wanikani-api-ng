import { TestBed } from '@angular/core/testing';

import { LevelProgressionsService } from './level-progressions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('LevelProgressionService', () => {
  let levelProgressionsService: LevelProgressionsService;

  beforeEach(() => {
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
        LevelProgressionsService
      ]
    });
    
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    levelProgressionsService = TestBed.get(LevelProgressionsService);
  });

  it('should be created', () => {
    expect(levelProgressionsService).toBeTruthy();
  });
});

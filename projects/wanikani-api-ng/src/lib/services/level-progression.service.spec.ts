import { TestBed } from '@angular/core/testing';

import { LevelProgressionService } from './level-progression.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('LevelProgressionService', () => {
  let levelProgressionsService: LevelProgressionService;

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
        LevelProgressionService
      ]
    });
    
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    levelProgressionsService = TestBed.get(LevelProgressionService);
  });

  it('should be created', () => {
    expect(levelProgressionsService).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SrsStageService } from './srs-stage.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenInterceptorService } from './token-interceptor.service';

describe('SrsStageService', () => {
  let srsStageService: SrsStageService;

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
          SrsStageService
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');
      
      srsStageService = TestBed.get(SrsStageService);
    }
  );

  it('should be created', () => {
    expect(srsStageService).toBeTruthy();
  });
});

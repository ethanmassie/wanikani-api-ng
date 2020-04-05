import { TestBed } from '@angular/core/testing';

import { SrsStageService } from './srs-stage.service';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';

describe('SrsStageService', () => {
  let srsStageService: SrsStageService;

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
          SrsStageService
        ]
      });

      const tokenService = TestBed.get(WanikaniTokenService);
      tokenService.setApiToken('mock token');
      
      srsStageService = TestBed.get(SrsStageService);
    }
  );

  it('should be created', () => {
    expect(srsStageService).toBeTruthy();
  });
});

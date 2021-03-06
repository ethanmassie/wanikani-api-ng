import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpacedRepetitionSystemService } from './spaced-repetition-system.service';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { WanikaniTokenService } from './wanikani-token.service';


describe('SpacedRepetitionSystemService', () => {
  let SpacedRepetitionSystemService: SpacedRepetitionSystemService;

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
          SpacedRepetitionSystemService
        ]
      });

      const tokenService = TestBed.get(WanikaniTokenService);
      tokenService.setApiToken('mock token');
      
      SpacedRepetitionSystemService = TestBed.get(SpacedRepetitionSystemService);
    }
  );

  it('should be created', () => {
    expect(SpacedRepetitionSystemService).toBeTruthy();
  });
});

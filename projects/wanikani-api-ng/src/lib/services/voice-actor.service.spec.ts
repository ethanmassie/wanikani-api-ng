import { TestBed } from '@angular/core/testing';

import { VoiceActorService } from './voice-actor.service';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenInterceptorService } from './token-interceptor.service';

describe('VoiceActorService', () => {
  let voiceActorService: VoiceActorService;

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
          VoiceActorService
        ]
      });

      const tokenService = TestBed.get(TokenService);
      tokenService.setApiToken('mock token');
    }
  );

  it('should be created', () => {
    voiceActorService = TestBed.get(VoiceActorService);
    expect(voiceActorService).toBeTruthy();
  });
});

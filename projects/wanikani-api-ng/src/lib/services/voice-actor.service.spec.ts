import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { VoiceActorService } from './voice-actor.service';
import { WanikaniTokenInterceptorService } from './wanikani-token-interceptor.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('VoiceActorService', () => {
  let voiceActorService: VoiceActorService;

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
        VoiceActorService,
      ],
    });

    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    voiceActorService = TestBed.inject(VoiceActorService);
  });

  it('should be created', () => {
    expect(voiceActorService).toBeTruthy();
  });
});

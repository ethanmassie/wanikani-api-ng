import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WanikaniTokenInterceptorService } from '../../public-api';
import { StudyMaterialService } from './study-material.service';
import { WanikaniTokenService } from './wanikani-token.service';

describe('StudyMaterialService', () => {
  let studyMaterialService: StudyMaterialService;

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
        StudyMaterialService,
      ],
    });
    const tokenService = TestBed.inject(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    studyMaterialService = TestBed.inject(StudyMaterialService);
  });

  it('should be created', () => {
    expect(studyMaterialService).toBeTruthy();
  });
});

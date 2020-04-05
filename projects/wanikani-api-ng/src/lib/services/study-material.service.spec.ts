import { TestBed } from '@angular/core/testing';

import { StudyMaterialService } from './study-material.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WanikaniTokenService } from './wanikani-token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WanikaniTokenInterceptorService } from '../../public-api';

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
          multi: true
        },
        StudyMaterialService
      ]
    });
    const tokenService = TestBed.get(WanikaniTokenService);
    tokenService.setApiToken('mock token');

    studyMaterialService = TestBed.inject(StudyMaterialService);
  });

  it('should be created', () => {
    expect(studyMaterialService).toBeTruthy();
  });
});

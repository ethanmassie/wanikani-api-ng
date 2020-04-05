import { TestBed } from '@angular/core/testing';

import { StudyMaterialService } from './study-material.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('StudyMaterialService', () => {
  let studyMaterialService: StudyMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        },
        StudyMaterialService
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    studyMaterialService = TestBed.inject(StudyMaterialService);
  });

  it('should be created', () => {
    expect(studyMaterialService).toBeTruthy();
  });
});

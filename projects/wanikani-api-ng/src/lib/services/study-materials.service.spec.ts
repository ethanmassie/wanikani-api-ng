import { TestBed } from '@angular/core/testing';

import { StudyMaterialsService } from './study-materials.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../public-api';

describe('StudyMaterialsService', () => {
  let studyMaterialService: StudyMaterialsService;

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
        StudyMaterialsService
      ]
    });
    const tokenService = TestBed.get(TokenService);
    tokenService.setApiToken('mock token');

    studyMaterialService = TestBed.inject(StudyMaterialsService);
  });

  it('should be created', () => {
    expect(studyMaterialService).toBeTruthy();
  });
});

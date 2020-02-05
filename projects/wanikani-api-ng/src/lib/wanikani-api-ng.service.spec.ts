import { TestBed } from '@angular/core/testing';

import { WanikaniApiNgService } from './wanikani-api-ng.service';

describe('WanikaniApiNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WanikaniApiNgService = TestBed.get(WanikaniApiNgService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { TouteslesoffresService } from './touteslesoffres.service';

describe('TouteslesoffresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TouteslesoffresService]
    });
  });

  it('should be created', inject([TouteslesoffresService], (service: TouteslesoffresService) => {
    expect(service).toBeTruthy();
  }));
});

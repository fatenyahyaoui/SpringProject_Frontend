import { TestBed, inject } from '@angular/core/testing';

import { AcheteurService } from './acheteur.service';

describe('AcheteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcheteurService]
    });
  });

  it('should be created', inject([AcheteurService], (service: AcheteurService) => {
    expect(service).toBeTruthy();
  }));
});

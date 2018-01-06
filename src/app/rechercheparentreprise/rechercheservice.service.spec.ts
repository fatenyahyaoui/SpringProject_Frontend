import { TestBed, inject } from '@angular/core/testing';

import { RechercheserviceService } from './rechercheservice.service';

describe('RechercheserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RechercheserviceService]
    });
  });

  it('should be created', inject([RechercheserviceService], (service: RechercheserviceService) => {
    expect(service).toBeTruthy();
  }));
});

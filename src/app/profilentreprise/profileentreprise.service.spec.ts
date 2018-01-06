import { TestBed, inject } from '@angular/core/testing';

import { ProfileentrepriseService } from './profileentreprise.service';

describe('ProfileentrepriseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileentrepriseService]
    });
  });

  it('should be created', inject([ProfileentrepriseService], (service: ProfileentrepriseService) => {
    expect(service).toBeTruthy();
  }));
});

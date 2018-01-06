import { TestBed, inject } from '@angular/core/testing';

import { RechVilleService } from './rechville.service';

describe('RechVilleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RechVilleService]
    });
  });

  it('should be created', inject([RechVilleService], (service: RechVilleService) => {
    expect(service).toBeTruthy();
  }));
});

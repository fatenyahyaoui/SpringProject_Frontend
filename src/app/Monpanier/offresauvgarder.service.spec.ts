import { TestBed, inject } from '@angular/core/testing';

import { OffresauvgarderService } from './offresauvgarder.service';

describe('OffresauvgarderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffresauvgarderService]
    });
  });

  it('should be created', inject([OffresauvgarderService], (service: OffresauvgarderService) => {
    expect(service).toBeTruthy();
  }));
});

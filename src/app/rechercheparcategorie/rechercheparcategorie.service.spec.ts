import { TestBed, inject } from '@angular/core/testing';

import { RechercheparcategorieService } from './rechercheparcategorie.service';

describe('RechercheparcategorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RechercheparcategorieService]
    });
  });

  it('should be created', inject([RechercheparcategorieService], (service: RechercheparcategorieService) => {
    expect(service).toBeTruthy();
  }));
});

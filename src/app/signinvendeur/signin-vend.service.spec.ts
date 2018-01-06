import { TestBed, inject } from '@angular/core/testing';

import { SigninVendService } from './signin-vend.service';

describe('SigninVendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninVendService]
    });
  });

  it('should be created', inject([SigninVendService], (service: SigninVendService) => {
    expect(service).toBeTruthy();
  }));
});

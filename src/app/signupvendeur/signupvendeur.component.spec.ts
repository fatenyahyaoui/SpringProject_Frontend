import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupvendeurComponent } from './signupvendeur.component';

describe('SignupvendeurComponent', () => {
  let component: SignupvendeurComponent;
  let fixture: ComponentFixture<SignupvendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupvendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupvendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

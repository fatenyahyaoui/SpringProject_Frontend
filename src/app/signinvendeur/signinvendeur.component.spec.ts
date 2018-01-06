import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninvendeurComponent } from './signinvendeur.component';

describe('SigninrecruteurComponent', () => {
  let component: SigninvendeurComponent;
  let fixture: ComponentFixture<SigninvendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninvendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninvendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

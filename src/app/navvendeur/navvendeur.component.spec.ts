import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavvendeurComponent } from './navvendeur.component';

describe('NavrecruteurComponent', () => {
  let component: NavvendeurComponent;
  let fixture: ComponentFixture<NavvendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavvendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavvendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

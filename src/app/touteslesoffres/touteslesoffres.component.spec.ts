import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouteslesoffresComponent } from './touteslesoffres.component';

describe('TouteslesoffresComponent', () => {
  let component: TouteslesoffresComponent;
  let fixture: ComponentFixture<TouteslesoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouteslesoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouteslesoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexacheteurComponent } from './indexacheteur.component';

describe('IndexacheteurComponent', () => {
  let component: IndexacheteurComponent;
  let fixture: ComponentFixture<IndexacheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexacheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexacheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

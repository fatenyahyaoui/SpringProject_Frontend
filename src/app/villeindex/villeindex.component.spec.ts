import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleindexComponent } from './villeindex.component';

describe('VilleindexComponent', () => {
  let component: VilleindexComponent;
  let fixture: ComponentFixture<VilleindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

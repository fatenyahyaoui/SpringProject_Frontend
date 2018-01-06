import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategierechercheComponent } from './strategierecherche.component';

describe('StrategierechercheComponent', () => {
  let component: StrategierechercheComponent;
  let fixture: ComponentFixture<StrategierechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategierechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategierechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

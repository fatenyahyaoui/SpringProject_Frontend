import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposeroffreComponent } from './deposeroffre.component';

describe('DeposeroffreComponent', () => {
  let component: DeposeroffreComponent;
  let fixture: ComponentFixture<DeposeroffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposeroffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposeroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

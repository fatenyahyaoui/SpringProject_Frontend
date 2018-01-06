import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparvilleComponent } from './rechercheparville.component';

describe('RechercheparvilleComponent', () => {
  let component: RechercheparvilleComponent;
  let fixture: ComponentFixture<RechercheparvilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheparvilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheparvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

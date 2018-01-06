import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheavanceeComponent } from './rechercheavancee.component';

describe('RechercheavanceeComponent', () => {
  let component: RechercheavanceeComponent;
  let fixture: ComponentFixture<RechercheavanceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheavanceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheavanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

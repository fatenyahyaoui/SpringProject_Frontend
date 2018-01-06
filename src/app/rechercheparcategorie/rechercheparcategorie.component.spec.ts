import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparcategorieComponent } from './rechercheparcategorie.component';

describe('RechercheparcategorieComponent', () => {
  let component: RechercheparcategorieComponent;
  let fixture: ComponentFixture<RechercheparcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheparcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheparcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

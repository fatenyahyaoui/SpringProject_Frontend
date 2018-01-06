import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseindexComponent } from './entrepriseindex.component';

describe('EntrepriseindexComponent', () => {
  let component: EntrepriseindexComponent;
  let fixture: ComponentFixture<EntrepriseindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

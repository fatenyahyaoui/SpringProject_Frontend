import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVendeurComponent } from './liste-vendeur.component';

describe('ListeRecruteurComponent', () => {
  let component: ListeVendeurComponent;
  let fixture: ComponentFixture<ListeVendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeVendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

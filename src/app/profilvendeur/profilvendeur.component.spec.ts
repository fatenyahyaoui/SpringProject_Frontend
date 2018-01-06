import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilvendeurComponent } from './profilvendeur.component';

describe('ProfilvendeurComponent', () => {
  let component: ProfilvendeurComponent;
  let fixture: ComponentFixture<ProfilvendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilvendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilvendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

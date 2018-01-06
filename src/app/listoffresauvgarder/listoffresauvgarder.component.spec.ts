import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffresauvgarderComponent } from './listoffresauvgarder.component';

describe('ListoffresauvgarderComponent', () => {
  let component: ListoffresauvgarderComponent;
  let fixture: ComponentFixture<ListoffresauvgarderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoffresauvgarderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffresauvgarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

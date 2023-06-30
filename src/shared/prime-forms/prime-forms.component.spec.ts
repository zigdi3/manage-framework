import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFormsComponent } from './prime-forms.component';

describe('PrimeFormsComponent', () => {
  let component: PrimeFormsComponent;
  let fixture: ComponentFixture<PrimeFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeFormsComponent]
    });
    fixture = TestBed.createComponent(PrimeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

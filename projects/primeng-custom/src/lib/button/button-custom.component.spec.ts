import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCustomComponent } from './button-custom.component';

describe('PrimengCustomComponent', () => {
  let component: ButtonCustomComponent;
  let fixture: ComponentFixture<ButtonCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCustomComponent]
    });
    fixture = TestBed.createComponent(ButtonCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

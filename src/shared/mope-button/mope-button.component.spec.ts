import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopeButtonComponent } from './mope-button.component';

describe('MopeButtonComponent', () => {
  let component: MopeButtonComponent;
  let fixture: ComponentFixture<MopeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MopeButtonComponent]
    });
    fixture = TestBed.createComponent(MopeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

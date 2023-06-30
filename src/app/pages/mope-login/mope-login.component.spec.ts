import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopeLoginComponent } from './mope-login.component';

describe('MopeLoginComponent', () => {
  let component: MopeLoginComponent;
  let fixture: ComponentFixture<MopeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MopeLoginComponent]
    });
    fixture = TestBed.createComponent(MopeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MopePanelComponent } from './mope-panel.component';

describe('MopePanelComponent', () => {
  let component: MopePanelComponent;
  let fixture: ComponentFixture<MopePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { IvyFullStatusComponent } from './ivy-full-status.component';
import { MaterialModule } from '../material.module';

describe('IvyFullStatusComponent', () => {
  let component: IvyFullStatusComponent;
  let fixture: ComponentFixture<IvyFullStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IvyFullStatusComponent],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [MaterialModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IvyFullStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

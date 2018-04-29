import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

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
        imports: [MaterialModule, RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IvyFullStatusComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.overallStatus = {
      nbrFeaturesCompleted: 7,
      nbrFeaturesPending: 3,
      progressPercentage: 70,
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();

    const OverviewElement = fixture.debugElement.nativeElement.querySelector(
      'app-ivy-overview'
    );
    expect(OverviewElement).toBeTruthy();

    const featureGroupTreeElement = fixture.debugElement.nativeElement.querySelector(
      'app-feature-group-tree'
    );
    expect(featureGroupTreeElement).toBeTruthy();
    // more tests to come
  });
});

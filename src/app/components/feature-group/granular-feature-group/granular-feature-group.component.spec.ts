import { FeatureTableService } from './../../../services/feature-table.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MaterialModule } from '../../material.module';
import { DirectiveModule } from '../../../directives/directive.module';

import { FeatureGroupService } from '../../../services/feature-group.service';

import { GranularFeatureGroupComponent } from './granular-feature-group.component';
import { FeatureGroupOverviewComponent } from '../feature-group-overview/feature-group-overview.component';
import { FeatureTableComponent } from './../../feature-table/feature-table.component';
import { GranularStatusComponent } from '../../common/granular-status/granular-status.component';

describe('GranularFeatureGroupComponent', () => {
  let component: GranularFeatureGroupComponent;
  let fixture: ComponentFixture<GranularFeatureGroupComponent>;
  let featureGroupService: Partial<FeatureGroupService>;
  let featureTableService: Partial<FeatureTableService>;

  featureGroupService = {
    getProgressInformation: () => {
      return {
        nbrCompleted: 7,
        nbrPending: 3,
        percentage: 70,
      };
    },
  };
  featureTableService = {
    getTableColumns: () => [],
    getElementData: () => [],
  };
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule, DirectiveModule],
        providers: [
          { provide: FeatureGroupService, useValue: featureGroupService },
          { provide: FeatureTableService, useValue: featureTableService },
        ],
        declarations: [
          GranularFeatureGroupComponent,
          FeatureGroupOverviewComponent,
          FeatureTableComponent,
          GranularStatusComponent,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GranularFeatureGroupComponent);
    component = fixture.componentInstance;
  });

  it('should creates', () => {
    component.name = '';
    component.features = [];
    fixture.detectChanges();
    expect(component).toBeTruthy();

    const overviewElement = fixture.debugElement.query(
      By.css('mat-progress-spinner')
    );
    expect(overviewElement).toBeTruthy();
    expect(overviewElement.attributes['ng-reflect-mode']).toEqual(
      'determinate'
    );
    expect(overviewElement.attributes['ng-reflect-diameter']).toEqual('55');
    expect(
      overviewElement.attributes['ng-reflect-no-default-color']
    ).toBeTruthy();
    expect(overviewElement.attributes['ng-reflect-stroke-width']).toEqual('4');
    expect(overviewElement.attributes['ng-reflect-value']).toEqual('70');

    const featureTableElement = fixture.debugElement.query(
      By.css('app-feature-table')
    );
    expect(featureTableElement).toBeTruthy();
  });
});

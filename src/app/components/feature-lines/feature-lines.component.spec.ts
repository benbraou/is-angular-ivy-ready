import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MaterialModule } from './../material.module';
import { FeatureLinesComponent } from './feature-lines.component';
import { DirectiveModule } from '../../directives/directive.module';
import { MatIconModule } from '@angular/material';
import { GranularStatusComponent } from '../common/granular-status/granular-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { featureLines } from '../../mocks/feature.mock';

describe('FeatureLinesComponent', () => {
  let component: FeatureLinesComponent;
  let fixture: ComponentFixture<FeatureLinesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialModule,
          DirectiveModule,
          MatIconModule,
          BrowserAnimationsModule,
        ],
        declarations: [FeatureLinesComponent, GranularStatusComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureLinesComponent);
    component = fixture.componentInstance;
    component.features = featureLines();
    fixture.detectChanges();
  });

  describe('should correctly render', () => {
    it('component should render', () => {
      expect(component).toBeTruthy();
    });

    it('accordion elements should render', () => {
      // check accordion count
      const accordionElement = fixture.debugElement.nativeElement.querySelector(
        'mat-accordion'
      );
      expect(accordionElement).toBeTruthy();
    });

    it('should bind first title correctly', () => {
      // check accordion
      const accordionElement = fixture.debugElement.nativeElement.querySelector(
        'mat-accordion'
      );
      // check first title
      const title = accordionElement.querySelector(
        'mat-expansion-panel-header mat-panel-title'
      ).lastChild;
      expect(title).toBeTruthy();
      expect(title.textContent.trim()).toBe(featureLines()[0].name);
    });
  });

  describe('should render nested component for childFeatures', () => {
    it('should Lazy render child features', () => {
      // should have child component
      const accordionElement = fixture.debugElement.nativeElement.querySelectorAll(
        'app-feature-lines'
      );
      console.log(accordionElement);
      expect(accordionElement).toBeTruthy();
      expect(Array.from(accordionElement).length).toBe(0);
    });

    it('should not display granular status for childFeatures which has granularStatuses length 1', () => {
      // should have child component
      const granularStatus = fixture.debugElement.nativeElement.querySelector(
        'app-granular-status'
      );

      expect(component.features[0].status.granularStatuses.length).toBe(1);
      expect(granularStatus).toBeFalsy();
    });
  });
});

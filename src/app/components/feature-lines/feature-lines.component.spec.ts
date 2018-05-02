import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MaterialModule } from './../material.module';
import { FeatureLinesComponent } from './feature-lines.component';
import { DirectiveModule } from '../../directives/directive.module';
import { MatIconModule } from '@angular/material';
import { GranularStatusComponent } from '../common/granular-status/granular-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const features = [
  {
    name:
      'Rewrite existing code by interpreting the associated STORING_METADATA_IN_D.TS',
    status: {
      completed: false,
      categories: null,
      granularStatuses: [
        {
          category: '',
          code: 'NOT_IMPLEMENTED',
          description: '',
        },
      ],
    },
    childFeatures: [
      {
        name: '`PipeCompiler`: `@Pipe` => `definePipe`',
        status: {
          completed: false,
          categories: null,
          granularStatuses: [
            {
              category: '',
              code: 'NOT_IMPLEMENTED',
              description: '',
            },
          ],
        },
        childFeatures: null,
      },
      {
        name: '`ComponentCompiler`: `@Component` => `defineComponent`',
        status: {
          completed: false,
          categories: null,
          granularStatuses: [
            {
              category: '',
              code: 'NOT_IMPLEMENTED',
              description: '',
            },
          ],
        },
        childFeatures: [
          {
            name: '`TemplateCompiler`',
            status: {
              completed: false,
              categories: null,
              granularStatuses: [
                {
                  category: '',
                  code: 'NOT_IMPLEMENTED',
                  description: '',
                },
              ],
            },
            childFeatures: null,
          },
          {
            name: '`StyleCompiler`',
            status: {
              completed: false,
              categories: null,
              granularStatuses: [
                {
                  category: '',
                  code: 'NOT_IMPLEMENTED',
                  description: '',
                },
              ],
            },
            childFeatures: null,
          },
        ],
      },
    ],
  },
];

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
    component.features = features;
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
      ).firstChild;
      expect(title).toBeTruthy();
      expect(title.textContent.trim()).toBe(features[0].name);
    });
  });

  describe('should render nested component for childFeatures', () => {
    it('should have child component for childFeatures', () => {
      // should have child component
      const accordionElement = fixture.debugElement.nativeElement.querySelectorAll(
        'app-feature-lines'
      );

      expect(accordionElement).toBeTruthy();
      expect(Array.from(accordionElement).length).toBeGreaterThan(1);
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

  describe('should display card for all features', () => {
    it('mat list item should be exactly equal as that of features', () => {
      const matListItems = fixture.debugElement.nativeElement.querySelectorAll(
        'mat-list-item'
      );

      // total mat-list-item are 5 considering childFeatures
      expect(Array.from(matListItems).length).toBe(5);
    });

    it('should not display granular status for childFeatures which has granularStatuses length 1', () => {
      expect(false).toBeFalsy();
    });
  });
});

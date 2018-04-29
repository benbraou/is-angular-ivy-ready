import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGroupTreeComponent } from './feature-group-tree.component';
import { ENHANCED_IVY_RESPONSE } from '../../../mocks/ivy-api.mock';

describe('FeatureGroupTreeComponent', () => {
  let component: FeatureGroupTreeComponent;
  let fixture: ComponentFixture<FeatureGroupTreeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [FeatureGroupTreeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGroupTreeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.node = ENHANCED_IVY_RESPONSE.data.featureGroup;
    fixture.detectChanges();
    expect(component).toBeTruthy();

    expect(component).toBeTruthy();

    const h4Elements = fixture.debugElement.nativeElement.querySelectorAll(
      'h4'
    );
    expect(h4Elements.length).toBe(4);
    expect(
      Array.from(h4Elements).map((header: HTMLElement) =>
        header.textContent.trim()
      )
    ).toEqual([
      '1. Implementation Status',
      '1.1. `@angular/compiler-cli` changes',
      '2. Crosscutting',
      '2.5. Template Compiler',
    ]);

    const granularFeatureGroupElements = fixture.debugElement.nativeElement.querySelectorAll(
      'app-granular-feature-group'
    );
    expect(granularFeatureGroupElements.length).toBe(16);
  });
});

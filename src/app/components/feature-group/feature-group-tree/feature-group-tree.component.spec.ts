import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGroupTreeComponent } from './feature-group-tree.component';

describe('FeatureGroupTreeComponent', () => {
  let component: FeatureGroupTreeComponent;
  let fixture: ComponentFixture<FeatureGroupTreeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FeatureGroupTreeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGroupTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

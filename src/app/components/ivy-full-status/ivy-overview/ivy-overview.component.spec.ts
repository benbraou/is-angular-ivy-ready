import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyOverviewComponent } from './ivy-overview.component';
import { StatsSummaryComponent } from '../../common/stats-summary/stats-summary.component';
import { MaterialModule } from '../../material.module';

describe('IvyOverviewComponent', () => {
  let component: IvyOverviewComponent;
  let fixture: ComponentFixture<IvyOverviewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IvyOverviewComponent, StatsSummaryComponent],
        imports: [MaterialModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IvyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

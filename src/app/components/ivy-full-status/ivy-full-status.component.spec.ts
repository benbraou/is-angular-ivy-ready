import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyFullStatusComponent } from './ivy-full-status.component';
import { StatsSummaryComponent } from '../common/stats-summary/stats-summary.component';
import { MaterialModule } from '../material.module';

describe('IvyStatusComponent', () => {
  let component: IvyFullStatusComponent;
  let fixture: ComponentFixture<IvyFullStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IvyFullStatusComponent, StatsSummaryComponent],
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

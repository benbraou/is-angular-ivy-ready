import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';

import { OverallStatusComponent } from './overall-status.component';

describe('OverallStatusComponent', () => {
  let component: OverallStatusComponent;
  let fixture: ComponentFixture<OverallStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OverallStatusComponent],
        imports: [MatProgressSpinnerModule, MatCardModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyStatusComponent } from './ivy-status.component';
import { OverallStatusComponent } from '../overall-status/overall-status.component';
import { MaterialModule } from '../material.module';

describe('IvyStatusComponent', () => {
  let component: IvyStatusComponent;
  let fixture: ComponentFixture<IvyStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IvyStatusComponent, OverallStatusComponent],
        imports: [MaterialModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IvyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

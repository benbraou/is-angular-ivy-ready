import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GranularStatusComponent } from './granular-status.component';
import { MatIconModule } from '@angular/material';

describe('GranularStatusComponent', () => {
  let component: GranularStatusComponent;
  let fixture: ComponentFixture<GranularStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MatIconModule],
        declarations: [GranularStatusComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GranularStatusComponent);
    component = fixture.componentInstance;
  });

  it('should handle IMPLEMENTED status', () => {
    component.forceDescription = false;
    component.status = {
      code: 'IMPLEMENTED',
      category: '@Component',
      description: '@Component',
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const iconElement = fixture.debugElement.nativeElement.querySelector(
      'mat-icon'
    );
    expect(iconElement.textContent.trim()).toBe('done');
  });

  it('should handle NOT_IMPLEMENTED status', () => {
    component.forceDescription = false;
    component.status = {
      code: 'NOT_IMPLEMENTED',
      category: '@Component',
      description: '@Component',
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const iconElement = fixture.debugElement.nativeElement.querySelector(
      'mat-icon'
    );
    expect(iconElement.textContent.trim()).toBe('clear');
  });

  it('should handle NOT_APPLICABLE status', () => {
    component.forceDescription = false;
    component.status = {
      code: 'NOT_APPLICABLE',
      category: '@Component',
      description: '@Component',
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const iconElement = fixture.debugElement.nativeElement.querySelector(
      'mat-icon'
    );
    expect(iconElement).toBeFalsy();

    const na = fixture.debugElement.nativeElement.querySelector(
      'div[fxLayout] > div '
    );
    expect(na).toBeTruthy();

    expect(na.textContent.trim()).toBe('N/A');
  });
});

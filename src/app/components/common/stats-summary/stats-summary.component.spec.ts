import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  MatProgressSpinnerModule,
  MatCardModule,
  MatDividerModule,
} from '@angular/material';

import { StatsSummaryComponent } from './stats-summary.component';

describe('StatsSummaryComponent', () => {
  let component: StatsSummaryComponent;
  let fixture: ComponentFixture<StatsSummaryComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StatsSummaryComponent],
        imports: [MatProgressSpinnerModule, MatCardModule, MatDividerModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsSummaryComponent);
    component = fixture.componentInstance;
  });

  it('should correctly display the overall status', () => {
    component.title = 'Overall status';
    component.percentage = 19;
    component.nbrCompleted = 15;
    component.nbrPending = 12;

    fixture.detectChanges();
    expect(component).toBeTruthy();

    const cardElement = fixture.debugElement.nativeElement.querySelector(
      'mat-card'
    );
    expect(cardElement).toBeTruthy();

    const title = cardElement.querySelector('mat-card-title');
    expect(title).toBeTruthy();
    expect(title.textContent.trim()).toBe('Overall status');

    const contents = fixture.debugElement.queryAll(By.css('mat-card > div'));
    expect(contents.length).toBe(2);

    // First div contains mat-progress-spinner component
    const spinner = contents[0].query(By.css('mat-progress-spinner'));
    expect(spinner).toBeTruthy();

    // Second div contains stats about the number of implemented/pending features
    expect(contents[1].attributes.class).toEqual('stats');
    expect(contents[1].attributes.fxLayout).toEqual('row');

    const vDivider = contents[1].nativeElement.querySelector('mat-divider');
    expect(vDivider).toBeTruthy();

    const h3s = contents[1].nativeElement.querySelectorAll('h3');
    // querySelectorAll returns elements in document order, so it is safe to do assertions on the
    // list of h3 elements. The test can be however made more complete by testing the wrapper div s
    // ...
    expect(
      Array.from(h3s).map((header: HTMLElement) => header.textContent)
    ).toEqual(['15', 'Completed', '12', 'Pending']);
  });
});

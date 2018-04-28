import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MaterialModule } from './../../material.module';
import { FeatureGroupOverviewComponent } from './feature-group-overview.component';
import { DirectiveModule } from '../../../directives/directive.module';

describe('FeatureGroupOverviewComponent', () => {
  let component: FeatureGroupOverviewComponent;
  let fixture: ComponentFixture<FeatureGroupOverviewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule, DirectiveModule],
        declarations: [FeatureGroupOverviewComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGroupOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should correctly render', () => {
    component.name = 'Decorators';
    component.progressInfo = {
      nbrCompleted: 7,
      nbrPending: 3,
      percentage: 70,
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();

    // check card container
    const cardElement = fixture.debugElement.nativeElement.querySelector(
      'mat-card'
    );
    expect(cardElement).toBeTruthy();

    // check title
    const title = cardElement.querySelector('h3');
    expect(title).toBeTruthy();
    expect(title.textContent.trim()).toBe('Decorators');

    const contents = fixture.debugElement.queryAll(By.css('mat-card > div'));
    expect(contents.length).toBe(1);

    // check progress spinner
    const spinner = contents[0].query(By.css('mat-progress-spinner'));
    expect(spinner).toBeTruthy();
    expect(spinner.styles.width).toEqual('55px');
    expect(spinner.styles.height).toEqual('55px');
    expect(spinner.attributes.caption).toBeDefined();

    // card icons
    const icons = cardElement.querySelectorAll('mat-icon');
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(2);
    expect(icons[0].textContent.trim()).toBe('done');
    expect(icons[1].textContent.trim()).toBe('clear');
  });
});

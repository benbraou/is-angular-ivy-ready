import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulLinksComponent } from './useful-links.component';

describe('UsefulLinksComponent', () => {
  let component: UsefulLinksComponent;
  let fixture: ComponentFixture<UsefulLinksComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UsefulLinksComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

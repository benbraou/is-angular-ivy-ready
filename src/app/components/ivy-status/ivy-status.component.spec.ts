import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyStatusComponent } from './ivy-status.component';

describe('IvyStatusComponent', () => {
  let component: IvyStatusComponent;
  let fixture: ComponentFixture<IvyStatusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IvyStatusComponent],
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

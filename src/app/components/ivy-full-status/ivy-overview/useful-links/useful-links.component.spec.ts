import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyLinksService } from '../../../../services/ivy-links.service';

import { UsefulLinksComponent } from './useful-links.component';
import { IVY_LINKS } from '../../../../mocks/ivy-links.mock';

describe('UsefulLinksComponent', () => {
  let component: UsefulLinksComponent;
  let fixture: ComponentFixture<UsefulLinksComponent>;
  let ivyLinksServiceStub: Partial<IvyLinksService>;

  ivyLinksServiceStub = {
    getIvyLinks: () => IVY_LINKS.slice(),
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UsefulLinksComponent],
        providers: [
          { provide: IvyLinksService, useValue: ivyLinksServiceStub },
        ],
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

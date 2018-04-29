import { MatToolbarModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { GithubLinkComponent } from '../common/github-link/github-link.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent, GithubLinkComponent],
        imports: [MatToolbarModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a footer with correct information', () => {
    expect(component).toBeTruthy();

    const toolbarElement = fixture.debugElement.nativeElement.querySelector(
      'mat-toolbar'
    );
    expect(toolbarElement).toBeTruthy();
    const pElement = toolbarElement.querySelector('p');
    expect(pElement).toBeTruthy();
    expect(pElement.textContent.trim()).toBe(
      '© Copyright 2018 Oussama Ben Brahim'
    );

    const githubLink = toolbarElement.querySelector('app-github-link');
    expect(githubLink).toBeTruthy();
  });
});

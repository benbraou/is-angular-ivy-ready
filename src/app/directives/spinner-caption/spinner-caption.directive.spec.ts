import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SpinnerCaptionDirective } from './spinner-caption.directive';
import { FixtureBuilder } from '../../helpers/testing/fixture.builder';

@Component({
  selector: 'app-test-spinner-caption',
  template: '',
})
export class TestSpinnerCaptionComponent implements OnInit {
  ngOnInit() {}
}

describe('[directive] CaptionDirective', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatProgressSpinnerModule],
      declarations: [TestSpinnerCaptionComponent, SpinnerCaptionDirective],
      providers: [],
    });
  });

  it('should not alter mat-progress-spinner if caption directive is not used', () => {
    const template = `
    <mat-progress-spinner [mode]="'determinate'" [value]="'10'" > </mat-progress-spinner>
    `;
    fixture = new FixtureBuilder()
      .withTemplate(template)
      .withComponentClass(TestSpinnerCaptionComponent)
      .build();
    fixture.detectChanges();
    const figures = fixture.debugElement.queryAll(By.css('figure'));
    expect(figures.length).toBe(0);
  });

  it('should work on mat-progress-spinner when caption directive is not used', () => {
    const template = `
    <mat-progress-spinner [mode]="'determinate'" [value]="'10'" caption> </mat-progress-spinner>
    `;
    fixture = new FixtureBuilder()
      .withTemplate(template)
      .withComponentClass(TestSpinnerCaptionComponent)
      .build();
    fixture.detectChanges();

    const figures = fixture.debugElement.queryAll(By.css('figure'));
    expect(figures.length).toBe(1);

    const figCaptions = fixture.debugElement.queryAll(By.css('figCaption'));
    expect(figCaptions.length).toBe(1);

    expect(figCaptions[0].properties['innerHTML']).toEqual('10%');
    expect(figCaptions[0].styles['width']).toEqual('100%');
    expect(figCaptions[0].styles['overflow']).toEqual('hidden');
    expect(figCaptions[0].styles['text-align']).toEqual('center');
    expect(figCaptions[0].styles['position']).toEqual('absolute');
    expect(figCaptions[0].styles['left']).toEqual('0');
    expect(figCaptions[0].styles['top']).toEqual('calc(50% - 1.25rem)');
    expect(figCaptions[0].styles['font-size']).toEqual('1.7rem');
    expect(figCaptions[0].styles['line-height']).toEqual('2.5rem');
  });

  it('should offer responsive caption based on mat-progress-spinner diameter', () => {
    const template = `
    <mat-progress-spinner [mode]="'determinate'" [value]="'10'" [diameter]="'100'" caption> </mat-progress-spinner>
    `;
    fixture = new FixtureBuilder()
      .withTemplate(template)
      .withComponentClass(TestSpinnerCaptionComponent)
      .build();
    fixture.detectChanges();

    const figures = fixture.debugElement.queryAll(By.css('figure'));
    expect(figures.length).toBe(1);

    const figCaptions = fixture.debugElement.queryAll(By.css('figCaption'));
    expect(figCaptions.length).toBe(1);

    expect(figCaptions[0].properties['innerHTML']).toEqual('10%');
    expect(figCaptions[0].styles['width']).toEqual('100%');
    expect(figCaptions[0].styles['overflow']).toEqual('hidden');
    expect(figCaptions[0].styles['text-align']).toEqual('center');
    expect(figCaptions[0].styles['position']).toEqual('absolute');
    expect(figCaptions[0].styles['left']).toEqual('0');
    expect(figCaptions[0].styles['top']).toEqual('calc(50% - 12.5px)');
    expect(figCaptions[0].styles['font-size']).toEqual('25px');
    expect(figCaptions[0].styles['line-height']).toEqual('25px');
  });

  it('should display 0% when falsy value is provided', () => {
    const template = `
    <mat-progress-spinner [mode]="'determinate'" [diameter]="'100'" caption> </mat-progress-spinner>
    `;
    fixture = new FixtureBuilder()
      .withTemplate(template)
      .withComponentClass(TestSpinnerCaptionComponent)
      .build();
    fixture.detectChanges();

    const figCaptions = fixture.debugElement.queryAll(By.css('figCaption'));
    expect(figCaptions.length).toBe(1);
    expect(figCaptions[0].properties['innerHTML']).toEqual('0%');
  });
});

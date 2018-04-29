import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color='primary'>
      <p>© Copyright 2018 Oussama Ben Brahim</p>
      <app-github-link></app-github-link>
    </mat-toolbar>
  `,
})
export class FooterComponent {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z4">
      <h1>Is Angular Ivy ready</h1>
    </mat-toolbar>
  `,
  styles: [
    `
    mat-toolbar {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 10;
    }
  `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

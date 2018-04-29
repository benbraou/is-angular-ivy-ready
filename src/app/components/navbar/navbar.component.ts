import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z4" fxLayout="row nowrap" fxLayoutAlign="left center">
      <h1 fxFlex="1 1">Is Angular Ivy ready</h1>
      <app-github-link></app-github-link>
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
    app-github-link {
      margin: 7px 0px 0px 0px;
    }
  `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

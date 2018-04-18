import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <h1>Is Angular Ivy ready</h1>
    </mat-toolbar>
  `,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

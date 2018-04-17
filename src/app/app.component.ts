import { Component } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <mat-sidenav-container fxFlexFill>
      <mat-sidenav  mode="side" fxLayout="column" [opened]='sideNavOpened'></mat-sidenav>
      <mat-sidenav-content fxFlexFill>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AppComponent {
  sideNavOpened: boolean;
  constructor(private media: ObservableMedia) {
    this.media.subscribe(change => this.mediaChanged());
  }

  private mediaChanged() {
    this.sideNavOpened = this.media.isActive('gt-xs');
  }
}

import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <mat-sidenav-container [class.loading]="loading" fxFlexFill>
      <mat-sidenav  mode="side" fxLayout="column" [opened]='sideNavOpened'></mat-sidenav>
      <mat-sidenav-content fxFlexFill [class.loading]="loading">
        <router-outlet></router-outlet>
        <app-waiting *ngIf="loading"></app-waiting>
      </mat-sidenav-content>
    </mat-sidenav-container>
    <app-footer></app-footer>
  `,
  styles: [
    `
    mat-sidenav-container.loading {
      height: calc(100vh - 64px);
    }
    mat-sidenav-content {
      padding-top: 80px;
    }
    mat-sidenav-content.loading {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    app-waiting {
      margin-top: -64px;
    }
  `,
  ],
})
export class AppComponent {
  sideNavOpened: boolean;
  loading = true;

  constructor(private media: ObservableMedia, private router: Router) {
    this.media.subscribe(change => this.mediaChanged());
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  private mediaChanged() {
    this.sideNavOpened = this.media.isActive('gt-xs');
  }

  private navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}

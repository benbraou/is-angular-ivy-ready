import { Component } from '@angular/core';

import { IvyLinksService } from '../../../../services/ivy-links.service';

@Component({
  selector: 'app-useful-links',
  template: `
    <mat-card class="mat-typography">
    <mat-card-title>Useful links</mat-card-title>
    <mat-list>
      <mat-list-item *ngFor="let link of links">
        <mat-icon mat-list-icon>forward</mat-icon>
        <a href="{{link.url}}" title="{{link.fullDescription}}">{{link.shortDescription}}</a>
      </mat-list-item>
    </mat-list>
    </mat-card>

  `,
})
export class UsefulLinksComponent {
  constructor(private ivyLinksService: IvyLinksService) {}

  get links() {
    return this.ivyLinksService.getIvyLinks();
  }
}

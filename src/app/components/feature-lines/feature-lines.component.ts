import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Feature } from '../../models';

@Component({
  selector: 'app-feature-lines',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./feature-lines.component.scss'],
  template: `
    <mat-accordion class="mat-typography" fxHide.lt-md>
      <ng-container *ngFor="let feature of features">
        <mat-expansion-panel [hideToggle]="!feature.childFeatures" [disabled]="!feature.childFeatures">
        <!-- header -->
        <mat-expansion-panel-header>
          <mat-panel-title fxLayout="row wrap" fxLayoutAlign="left center">
            <mat-icon mat-list-icon aria-hidden="true" [style.color]="feature.status.completed? 'green': 'red'">
            {{feature.status.completed? 'done': 'clear'}}
          </mat-icon>
          <span class="cdk-visually-hidden">{{feature.status.completed? 'Implemented': 'Not implemented'}}</span>
          {{feature.name}}
          </mat-panel-title>
        </mat-expansion-panel-header>

        <!-- Main Content -->
        <ng-template matExpansionPanelContent>
          <app-feature-lines *ngIf="!!feature.childFeatures" [features]="feature.childFeatures"></app-feature-lines>
          <ng-container *ngIf="!feature.childFeatures && feature.status.granularStatuses.length >1">
            <div *ngFor="let status of feature.status.granularStatuses">
              <app-granular-status [status]="status" [forceDescription]="true"></app-granular-status>
            </div>
          </ng-container>
        </ng-template>
        </mat-expansion-panel>
      </ng-container>
    </mat-accordion>
    <mat-card fxHide fxShow.lt-md>
      <div *ngFor="let feature of features" fxLayout="row nowrap" fxLayoutAlign="left center">
        <mat-icon mat-list-icon aria-hidden="true" [style.color]="feature.status.completed? 'green': 'red'">
          {{feature.status.completed? 'done': 'clear'}}
        </mat-icon>
        <span class="cdk-visually-hidden">{{feature.status.completed? 'Implemented': 'Not implemented'}}</span>
        <h5>
        {{feature.name}}
        </h5>
      </div>
    </mat-card>
  `,
})
export class FeatureLinesComponent {
  @Input() features: Feature[];
}

import { Component, Input } from '@angular/core';

import { GranularStatus } from './../../../models';

@Component({
  selector: 'app-granular-status',
  template: `
    <div *ngIf="knownStatuses.includes(status.code);else unknown">
      <div fxLayout="row nowrap" fxLayoutAlign="left center">
        <mat-icon
          mat-list-icon
          aria-hidden="true"
          [style.color] = "statusToColor[status.code]"
          *ngIf="status.code!=='NOT_APPLICABLE'">
            {{statusToIconName[status.code]}}
        </mat-icon>
        <div *ngIf="status.code === 'NOT_APPLICABLE'">{{statusToMessage[status.code]}}</div>
        <span class="cdk-visually-hidden">{{statusToMessage[status.code]}}</span>
        <div *ngIf="forceDescription || status.description !== status.category">{{status.description}}</div>
      </div>
    </div>
    <ng-template #unknown>
      {{status.code}}
    </ng-template>
  `,
})
export class GranularStatusComponent {
  @Input() status: GranularStatus;
  @Input() forceDescription: boolean;

  knownStatuses = ['IMPLEMENTED', 'NOT_IMPLEMENTED', 'NOT_APPLICABLE'];
  statusToIconName = { IMPLEMENTED: 'done', NOT_IMPLEMENTED: 'clear' };
  statusToMessage = {
    IMPLEMENTED: 'Implemented',
    NOT_IMPLEMENTED: 'Not implemented',
    NOT_APPLICABLE: 'N/A',
  };
  statusToColor = {
    IMPLEMENTED: 'green',
    NOT_IMPLEMENTED: 'red',
    NOT_APPLICABLE: 'inherit',
  };
  constructor() {}
}

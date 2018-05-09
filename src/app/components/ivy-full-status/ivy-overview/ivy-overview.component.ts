import { Component, Input } from '@angular/core';
import { OverallStatus } from '../../../models';

@Component({
  selector: 'app-ivy-overview',
  template: `
    <div fxLayout="row wrap"
      fxLayoutAlign="space-between"
      class="ivy-overview"
      *ngIf="!!percentage || !!nbrCompleted|| !!nbrPending">
      <app-stats-summary
        fxLayout="row"
        fxFlex="40"
        fxFlex.lt-md="100"
        [title]="title"
        [percentage]="percentage"
        [nbrCompleted]="nbrCompleted"
        [nbrPending]="nbrPending"
        fxFlexOrder.lt-md="1">
      </app-stats-summary>
      <app-useful-links
        fxFlex="59"
        fxFlex.lt-md="100"
        fxHide.lt-sm>
      </app-useful-links>
    </div>
  `,
  styleUrls: ['./ivy-overview.component.scss'],
})
export class IvyOverviewComponent {
  title = 'Overall status';
  @Input() overallStatus: OverallStatus;
  @Input() percentage: number;
  @Input() nbrCompleted: number;
  @Input() nbrPending: number;
}

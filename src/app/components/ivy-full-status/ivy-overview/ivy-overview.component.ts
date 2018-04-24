import { Component, Input } from '@angular/core';
import { OverallStatus } from '../../../models';

@Component({
  selector: 'app-ivy-overview',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-between" class="ivy-overview">
      <app-stats-summary
        fxLayout="row"
        fxFlex.gt-xs="100"
        fxFlex.gt-sm="40"
        [title]="title"
        [percentage]="percentage"
        [nbrCompleted]="nbrCompleted"
        [nbrPending]="nbrPending" >
      </app-stats-summary>
      <app-useful-links
        fxFlex.gt-xs="100"
        fxFlex.gt-sm="59"
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

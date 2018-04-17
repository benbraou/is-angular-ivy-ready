import { Component, Input } from '@angular/core';
import { OverallStatus } from '../../../models';

@Component({
  selector: 'app-ivy-overview',
  templateUrl: './ivy-overview.component.html',
  styleUrls: ['./ivy-overview.component.scss'],
})
export class IvyOverviewComponent {
  title = 'Overall status';
  @Input() overallStatus: OverallStatus;
  @Input() percentage: number;
  @Input() nbrCompleted: number;
  @Input() nbrPending: number;
}

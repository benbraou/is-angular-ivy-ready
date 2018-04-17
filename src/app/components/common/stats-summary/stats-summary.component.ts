import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-summary',
  templateUrl: './stats-summary.component.html',
  styleUrls: ['./stats-summary.component.scss'],
})
export class StatsSummaryComponent {
  @Input() title: string;
  @Input() percentage: number;
  @Input() nbrCompleted: number;
  @Input() nbrPending: number;
}

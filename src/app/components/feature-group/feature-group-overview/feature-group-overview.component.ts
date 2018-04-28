import { Component, Input } from '@angular/core';

import { FeatureGroupProgress } from '../../../models';

@Component({
  selector: 'app-feature-group-overview',
  templateUrl: './feature-group-overview.component.html',
  styleUrls: ['./feature-group-overview.component.scss'],
})
export class FeatureGroupOverviewComponent {
  @Input() name: string;
  @Input() progressInfo: FeatureGroupProgress;
}

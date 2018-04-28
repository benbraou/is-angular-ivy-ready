import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Feature, FeatureGroupProgress } from '../../../models';
import { FeatureGroupService } from '../../../services/feature-group.service';

@Component({
  selector: 'app-granular-feature-group',
  templateUrl: './granular-feature-group.component.html',
  styleUrls: ['./granular-feature-group.component.scss'],
})
export class GranularFeatureGroupComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() features: Feature[];
  progressInfo: FeatureGroupProgress;
  constructor(private featureGroupService: FeatureGroupService) {}

  ngOnInit() {
    this.updateProgressInfo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.features.firstChange) {
      this.updateProgressInfo();
    }
  }

  updateProgressInfo() {
    this.progressInfo = this.featureGroupService.getProgressInformation(
      this.features
    );
  }
}

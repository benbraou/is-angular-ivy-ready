import { Component, OnInit } from '@angular/core';
import { OverallStatus, FeatureGroup } from '../../models';
import { tableFeaturesFactory } from '../../mocks/feature.mock';
import { ENHANCED_IVY_RESPONSE } from '../../mocks/ivy-api.mock';

@Component({
  selector: 'app-ivy-status',
  template: `
    <app-ivy-overview
      [title] = "title"
      [percentage]="overallStatus.progressPercentage"
      [nbrCompleted]="overallStatus.nbrFeaturesCompleted"
      [nbrPending]="overallStatus.nbrFeaturesPending">
    </app-ivy-overview>
    <div style="margin:10px"></div>
    <app-feature-group-tree [node]="rootFeatureGroup"></app-feature-group-tree>
  `,
})
export class IvyFullStatusComponent implements OnInit {
  rootFeatureGroup: FeatureGroup = ENHANCED_IVY_RESPONSE.data.featureGroup;

  title = 'Overall status';
  overallStatus: OverallStatus = ENHANCED_IVY_RESPONSE.data.overallStatus;
  constructor() {}

  ngOnInit() {}
}

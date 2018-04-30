import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OverallStatus, FeatureGroup, Response } from '../../models';
import { tableFeaturesFactory } from '../../mocks/feature.mock';
import { ENHANCED_IVY_RESPONSE } from '../../mocks/ivy-api.mock';

@Component({
  selector: 'app-ivy-status',
  template: `
    <app-ivy-overview
      [title] = "'Overall status'"
      [percentage]="overallStatus?.progressPercentage"
      [nbrCompleted]="overallStatus?.nbrFeaturesCompleted"
      [nbrPending]="overallStatus?.nbrFeaturesPending">
    </app-ivy-overview>
    <div style="margin:10px"></div>
    <app-feature-group-tree [node]="rootFeatureGroup"></app-feature-group-tree>
    <!-- In the future, if there is no valid response, a meaningful error message will be displayed-->
  `,
})
export class IvyFullStatusComponent implements OnInit {
  rootFeatureGroup: FeatureGroup;
  overallStatus: OverallStatus;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const response: Response = this.route.snapshot.data['response'];
    if (!!response && !!response.data) {
      this.rootFeatureGroup = response.data.featureGroup;
      this.overallStatus = response.data.overallStatus;
    }
  }
}

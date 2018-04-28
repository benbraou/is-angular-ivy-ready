import { Component, OnInit } from '@angular/core';
import { OverallStatus, FeatureGroup } from '../../models';
import { tableFeaturesFactory } from '../../mocks/feature.mock';
import { IVY_RESPONSE } from '../../mocks/ivy-api.mock';

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
    <!--<app-granular-feature-group [features]="features" [name]="'Decorators'"></app-granular-feature-group>
    <app-feature-lines [features]="features"></app-feature-lines>-->
  `,
})
export class IvyFullStatusComponent implements OnInit {
  rootFeatureGroup: FeatureGroup = IVY_RESPONSE.data.featureGroup;

  title = 'Overall status';
  features = tableFeaturesFactory().features;
  overallStatus: OverallStatus = {
    progressPercentage: 70,
    nbrFeaturesCompleted: 15,
    nbrFeaturesPending: 10,
  };
  constructor() {}

  ngOnInit() {}
}
